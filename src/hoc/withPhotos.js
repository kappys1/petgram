import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID){
  photos(categoryId: $categoryId){
    _id
    categoryId
    src
    userId
    liked
    likes
  }
}
`
export const withPhotos = graphql(GET_PHOTOS)
