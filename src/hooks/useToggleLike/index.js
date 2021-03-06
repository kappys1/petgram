import { useMutation } from '@apollo/client'
import { gql } from 'apollo-boost'

export const LIKE_PHOTO = gql`
mutation likeMedia($input: LikeMedia!) {
  likeMedia(input: $input) {
    _id,
    liked,
    likes
  }
}`

export const useToggleLike = () => {
  const [toggleLike, { loading, error, data }] = useMutation(LIKE_PHOTO)
  return { toggleLike, loading, error, data }
}
