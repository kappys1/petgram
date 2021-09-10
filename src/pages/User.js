import React from 'react'
import { SubmitButton } from '../components/SubmitButton'
import { useStateValue } from '../Context'

export const User = () => {
  const [, dispatch] = useStateValue()

  const handleOnClick = () => dispatch({ type: 'removeAuth' })
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={handleOnClick}>cerrar sesión</SubmitButton>
    </>
  )
}
