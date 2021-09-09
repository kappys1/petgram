import React from 'react'
import { UserForm } from '../components/UserForm'
import { useStateValue } from '../Context'
import { useRegister } from '../hooks/useRegister'

export const NotRegisterUser = () => {
  const [, dispatch] = useStateValue()
  const { register, error, loading } = useRegister()
  const handleOnSubmitLogin = () => {
    dispatch({ type: 'activeAuth' })
  }
  const handleOnSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables }).then(() => dispatch({ type: 'activeAuth' }))
  }
  const errorMsg = error && 'El usuario ya existe o hay algun problema'
  return (
    <>
      <UserForm error={errorMsg} disabled={loading} onSubmit={handleOnSubmitRegister} title='Registrar' />
      <UserForm onSubmit={handleOnSubmitLogin} title='Iniciar sesion' />
    </>
  )
}
