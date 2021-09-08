import React, { useEffect, useState } from 'react'
import { Category } from '../Catergory'
import { List, Item } from './styles'
// import db from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(function () {
    window.fetch('https://petgram-server-kappys-5p5zyiegt-kappys1.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
