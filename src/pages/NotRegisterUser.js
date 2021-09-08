import React from 'react'
import { useStateValue } from '../Context'

export const NotRegisterUser = () => {
  const [state, dispatch] = useStateValue()
  const handleOnSubmit = () => {
    dispatch({
      type: 'activeAuth'
    })
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <button>iniciar sesión</button>
    </form>
  )
}
