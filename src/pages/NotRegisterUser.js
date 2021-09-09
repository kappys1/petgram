import React from 'react'
import { UserForm } from '../components/UserForm'
import { useStateValue } from '../Context'

export const NotRegisterUser = () => {
  const [, dispatch] = useStateValue()
  const handleOnSubmit = () => {
    dispatch({
      type: 'activeAuth'
    })
  }
  return (
    <UserForm onSubmit={handleOnSubmit} />
  )
}
