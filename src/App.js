import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotocards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotocards />
  </div>
)
