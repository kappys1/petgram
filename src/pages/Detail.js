import React from 'react'
import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../container/PhotoCard'

export const Detail = ({ detailId }) => {
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
