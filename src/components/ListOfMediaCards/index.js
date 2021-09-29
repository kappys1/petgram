import React from 'react'
import { List } from './styles'
import { PhotoCard } from '../PhotoCard'
import { VideoCard } from '../VideoCard'

export const ListOfMediaCardsComponent = ({ data: { medias = [] } }) => {
  const MediaElement = (media) => {
    let Element = PhotoCard
    if (media.type === 'video') {
      Element = VideoCard
    }
    return <Element {...media} />
  }
  return (
    <List>
      {medias.map(media => <li key={media._id}>{MediaElement(media)}</li>)}
    </List>
  )
}
