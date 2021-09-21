/* global describe, it, expect   */
import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { renderHook, act } from '@testing-library/react-hooks'
import { REGISTER, useRegister } from '.'

describe('useRegister', () => {
  it('fist test', async () => {
    const mocks = [
      {
        request: {
          query: REGISTER,
          variables: {
          }
        },
        result: {
          data: {
            signup: 1234
          }
        }
      }
    ]

    const wrapper = ({ children }) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    )
    const { result, waitForNextUpdate } = renderHook(() => useRegister(), { wrapper })
    act(() => {
      result.current.register()
    })
    await waitForNextUpdate()
    expect(result.current.data.signup).toBe(1234)
  })
})
