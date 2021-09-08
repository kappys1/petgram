import React from 'react'
import { Category } from '../Catergory'
import { List, Item } from './styles'
import db from '../../../api/db.json'

export const ListOfCategories = () => {
  console.log(db.categories)
  return (
    <List>
      {db.categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
