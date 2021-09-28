/* global describe, it, expect   */
import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { renderHook, act } from '@testing-library/react-hooks'
import { LOGIN, useLogin } from '.'

describe('useLogin', () => {
  it('fist test', async () => {
    const mocks = [
      {
        request: {
          query: LOGIN,
          variables: {
          }
        },
        result: {
          data: {
            login: true
          }
        }
      }
    ]

    const wrapper = ({ children }) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    )
    const { result, waitForNextUpdate } = renderHook(() => useLogin(), { wrapper })
    act(() => {
      result.current.login()
    })
    await waitForNextUpdate()
    expect(result.current.data.login).toBe(true)
  })
})
