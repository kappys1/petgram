import React, { Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Redirect, Router } from '@reach/router'
import { NavBar } from './components/NavBar'
import { useStateValue } from './Context'

const Favs = React.lazy(() => import('./pages/Favs'))
const Detail = React.lazy(() => import('./pages/Detail'))
const User = React.lazy(() => import('./pages/User'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const NotRegisterUser = React.lazy(() => import('./pages/NotRegisterUser'))

const authRoutes = [
  '/favs',
  '/user',
  '/',
  '/pet',
  '/detail'
]
export const App = () => {
  const [{ isAuth }] = useStateValue()
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      {isAuth && <Logo />}
      <Router>
        <NotFound default />
        {!isAuth && <NotRegisterUser path='/signup' />}
        {!isAuth && <NotRegisterUser path='/login' />}
        {authRoutes.map(route => !isAuth && <Redirect key={route} noThrow from={route} to='/login' />)}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        {isAuth && <Redirect noThrow from='/signup' to='/' />}
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      {isAuth && <NavBar />}
    </Suspense>
  )
}
