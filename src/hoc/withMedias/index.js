import { graphql } from '@apollo/client/react/hoc'
import { gql } from 'apollo-boost'

export const GET_MEDIAS = gql`
query getMedias($categoryId: ID){
  medias(categoryId: $categoryId){
    _id
    categoryId
    src
    userId
    liked
    likes
    type
  }
}
`
export const withMedias = graphql(GET_MEDIAS)
