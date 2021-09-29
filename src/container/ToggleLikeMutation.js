import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const LIKE_PHOTO = gql`
mutation likeMedia($input: LikeMedia!) {
  likeMedia(input: $input) {
    _id,
    liked,
    likes
  }
}`

export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {children}
    </Mutation>
  )
}
