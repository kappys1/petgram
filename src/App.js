import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { useStateValue } from './Context'

export const App = () => {
  const [{ isAuth }] = useStateValue()
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />

      </Router>
      {
      isAuth
        ? (
          <Router>
            <Favs path='/favs' />
            <User path='/user' />
          </Router>)
        : (
          <Router>
            <NotRegisterUser path='/favs' />
            <NotRegisterUser path='/user' />
          </Router>)
        }
      <NavBar />
    </div>
  )
}
