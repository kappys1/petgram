import React, { useEffect, useState } from 'react'
import { useCategoriesData } from '../../hooks/useCategories'
import { Category } from '../Catergory'
import { List, Item } from './styles'

const ListOfCategoriesComponents = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const scrollElement = document.getElementById('app')
    const onScroll = e => {
      console.log(scrollElement.scrollTop)
      const newShowFixed = scrollElement.scrollTop > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    scrollElement.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? <Item key='loading'><Category /></Item>
        : categories.map((category) => (
          <Item key={category._id}>
            <Category {...category} path={`/pet/${category._id}`} />
          </Item>
        ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponents)
