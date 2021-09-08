import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCard'
import { Home } from './pages/Home'
import { Router } from '@reach/router'

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
          <Router>
            <Home path='/' />
            <Home path='/pet/:categoryId' />
          </Router>
          )}
    </div>
  )
}
