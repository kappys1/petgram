import React from 'react'
import { UserForm } from '../components/UserForm'
import { useStateValue } from '../Context'
import { useLogin } from '../hooks/useLogin'
import { useRegister } from '../hooks/useRegister'

// No named export // Not Registered User
export default () => {
  const [, dispatch] = useStateValue()
  const { register, error, loading } = useRegister()
  const { login, error: errorLogin, loading: loadingLogin } = useLogin()

  const submitRegisterLogin = (fn, { email, password }) => {
    const input = { email, password }
    const variables = { input }
    fn({ variables }).then(({ data }) => {
      let token = ''
      token = fn === register ? data.signup : data.login
      dispatch({ type: 'activeAuth', token })
    })
  }

  const handleOnSubmitLogin = (input) => {
    submitRegisterLogin(login, input)
  }
  const handleOnSubmitRegister = (input) => {
    submitRegisterLogin(register, input)
  }
  const errorRegisterMsg = error && 'El usuario ya existe o hay algun problema'
  const errorLoginMsg = errorLogin && 'Contraseña incorrecta o el usuario no existe'

  return (
    <>
      <UserForm error={errorRegisterMsg} disabled={loading} onSubmit={handleOnSubmitRegister} title='Registrar' />
      <UserForm error={errorLoginMsg} disabled={loadingLogin} onSubmit={handleOnSubmitLogin} title='Iniciar sesion' />
    </>
  )
}
