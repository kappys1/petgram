import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

// no named export - Fav page
export default () => {
  return (
    <Layout title='Tus favoritos' subtitle='puedes encontrar tus favoritos'>
      <FavsWithQuery />
    </Layout>
  )
}
