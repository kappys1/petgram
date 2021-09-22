import React from 'react'
import { Button, Spinner } from './style'
import { PropTypes } from 'prop-types'

export const SubmitButton = ({ children, disabled, isLoading, onClick }) => {
  return <Button disabled={disabled} onClick={onClick}>{!isLoading ? children : <Spinner title='loading' />}</Button>
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
