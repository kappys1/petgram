import React from 'react'
import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../container/PhotoCard'

// no named export - Detail page

export default ({ detailId }) => {
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
