import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Logo } from '../Logo'
import { SubmitButton } from '../SubmitButton'
import { Form, Input, Title, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled, isLoading }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  const isButtonDisabled = () => {
    return disabled || email.value === '' || password.value === ''
  }

  return (
    <>
      <Form onSubmit={handleOnSubmit} disabled={disabled}>
        <Logo />
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email} type='email' />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        {error && <Error>{error}</Error>}
        <SubmitButton disabled={isButtonDisabled()} isLoading={isLoading}>{title}</SubmitButton>
      </Form>

    </>

  )
}
