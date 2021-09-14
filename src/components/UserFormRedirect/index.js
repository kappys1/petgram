import React from 'react'
import { Article, Link } from './styles'

export const UserFormRedirect = ({ isLogin }) => {
  return (
    <Article>
      {isLogin && <Link to='/signup'>¿No tienes una cuenta? <b>Regístrate</b></Link>}
      {!isLogin && <Link to='/login'>¿Tienes una cuenta? <b>Inicia Sesion</b></Link>}
    </Article>

  )
}
