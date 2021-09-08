import React from 'react'
import { Category } from '../Catergory'
import { List, Item } from './styles'
export const ListOfCategories = () => {
  return (
    <List>
      {
                [1, 2, 3, 4].map(category => <Item key={category}><Category /></Item>)
            }
    </List>
  )
}
