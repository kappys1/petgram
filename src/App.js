import React, { Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Redirect, Router } from '@reach/router'
// import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
// import { Favs } from './pages/Favs'
// import { User } from './pages/User'
// import { NotRegisterUser } from './pages/NotRegisterUser'
import { useStateValue } from './Context'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'))
const Detail = React.lazy(() => import('./pages/Detail'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisterUser = React.lazy(() => import('./pages/NotRegisterUser'))

export const App = () => {
  const [{ isAuth }] = useStateValue()
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisterUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />

      </Router>
      <NavBar />
    </Suspense>
  )
}
