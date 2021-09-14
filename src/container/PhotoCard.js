import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import { useStateValue } from '../Context'

const GET_SINGLE_PHOTO = gql`
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
  const [, dispatch] = useStateValue()
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id }
  })

  if (loading) return <p>Loading...</p>
  if (error) {
    setTimeout(() => dispatch({ type: 'removeAuth' }))
    return <p>error {error.message}</p>
  }

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}
