import React from 'react'
import { List } from './styles'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } }) => {
  return (
    <List>
      {photos.map(photo => <li key={photo._id}><PhotoCard {...photo} /></li>)}
    </List>
  )
}
