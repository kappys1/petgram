import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'

const query = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(query, {
    variables: { id }
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}
