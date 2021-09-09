import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleOnSubmit} disabled={disabled}>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>

  )
}
