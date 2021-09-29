import React from 'react'
import { List } from './styles'
import { PhotoCard } from '../PhotoCard'

export const ListOfMediaCardsComponent = ({ data: { medias = [] } }) => {
  return (
    <List>
      {medias.map(media => <li key={media._id}><PhotoCard {...media} /></li>)}
    </List>
  )
}
