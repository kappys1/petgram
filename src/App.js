import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { PhotoCardWithQuery } from './container/PhotoCard'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div>
      <Logo />
      <GlobalStyle />
      {detailId
        ? <PhotoCardWithQuery id={detailId} />
        : (
          <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
          </>
          )}
    </div>
  )
}
