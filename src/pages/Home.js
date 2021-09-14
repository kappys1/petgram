import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Helmet } from 'react-helmet'
import { SectionInApp } from '../components/Layout/styles'

export const HomePage = ({ categoryId }) => {
  return (
    <SectionInApp>
      <Helmet>
        <title> Petgram - Tu app de fotos de mascotas</title>
        <meta name='description' content='Con Petgram puedes encontrar fotos de animales domesticos muy bonitos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </SectionInApp>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
