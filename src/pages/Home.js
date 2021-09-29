import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfMediaCards } from '../container/ListOfMediasCards'
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
      <ListOfMediaCards categoryId={categoryId} />
    </SectionInApp>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
