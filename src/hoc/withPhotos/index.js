import { graphql } from '@apollo/client/react/hoc'
import { gql } from 'apollo-boost'

export const GET_PHOTOS = gql`
query getPhotos($categoryId: ID){
  photos(categoryId: $categoryId){
    id
    categoryId
    src
    userId
    liked
    likes
  }
}
`
export const withPhotos = graphql(GET_PHOTOS)
