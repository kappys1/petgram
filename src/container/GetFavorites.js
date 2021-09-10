import React from 'react'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
query getFavs{
  favs{
    id
    categoryId
    src
    userId
    likes
  }
}
`

export const FavsWithQuery = () => {
  const { loading, error, data } = useQuery(GET_FAVS, { fetchPolicy: 'cache-and-network' })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! ${error.message}</p>

  const { favs = [] } = data
  console.log(favs)
  return <ListOfFavs favs={favs} />
}
