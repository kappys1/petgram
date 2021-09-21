/* global expect  */
import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { renderHook } from '@testing-library/react-hooks'

export function getHookWrapper (hook, mocks) {
  const wrapper = ({ children }) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>
  )
  const { result, waitForNextUpdate } = renderHook(() => hook(), {
    wrapper
  })
  // Test the initial state of the request
  expect(result.current.loading).toBeFalsy()
  expect(result.current.error).toBeUndefined()
  return { result, waitForNextUpdate }
}
