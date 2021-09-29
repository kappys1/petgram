import React from 'react'
import { PhotoCard } from '../../components/PhotoCard'

import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/client'
import { useStateValue } from '../../Context'

export const GET_SINGLE_PHOTO = gql`
query getSingleMedia($id:ID!) {
  media(id:$id) {
    _id
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
    return <p className='error'>error {error.message}</p>
  }

  const { media = {} } = data
  return <PhotoCard {...media} />
}
