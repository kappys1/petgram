import React from 'react'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOfFavs } from '../components/ListOfFavs'
import { useStateValue } from '../Context'

const GET_FAVS = gql`
query getFavs{
  favs {
    _id
    categoryId
    src
    userId
    likes
  }
}
`

export const FavsWithQuery = () => {
  const [, dispatch] = useStateValue()
  const { loading, error, data } = useQuery(GET_FAVS, { fetchPolicy: 'cache-and-network' })

  if (loading) return <p>Loading...</p>
  if (error) {
    setTimeout(() => dispatch({ type: 'removeAuth' }))
    return <p>error {error.message}</p>
  }
  const { favs = [] } = data
  return <ListOfFavs favs={favs} />
}
