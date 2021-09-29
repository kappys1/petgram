import React from 'react'
import { Layout } from '../components/Layout'
import { MediaCardWithQuery } from '../container/MediaCard'

// no named export - Detail page

export default ({ detailId }) => {
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <MediaCardWithQuery id={detailId} />
    </Layout>
  )
}
