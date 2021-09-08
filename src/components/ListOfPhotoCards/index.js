import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
query getPhotos{
  photos{
    id
    categoryId
    src
    userId
    liked
  }
}
`)

const ListOfPhotocardsComponent = ({ data: { photos = [] } }) => {
  console.log(photos)
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

export const ListOfPhotocards = withPhotos(ListOfPhotocardsComponent)
