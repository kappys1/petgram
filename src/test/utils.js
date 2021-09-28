/* global expect  */
import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { renderHook } from '@testing-library/react-hooks'
import { Provider } from '../Context'

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

export const getMockProviders = (Element, mock, props) => (
  <Provider>
    <MockedProvider mocks={mock} addTypename={false}>
      <Element {...props} />
    </MockedProvider>
  </Provider>
)

export const generateMock = (query, result, variables = {}, isError = false) => {
  const request = {
    query,
    variables
  }
  const error = new Error('An error occurred')
  return [{ request, result: { data: result }, error: isError ? error : null }]
}
