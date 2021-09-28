/* global describe, it, expect */
import { renderHook } from '@testing-library/react-hooks'
import { useNearScreen } from '.'

describe('useInputValue', () => {
  it('fist test', () => {
    const { result, waitFor } = renderHook(() => useNearScreen())
    waitFor(() => {
      expect(result.current.show).toBe(false)
    })
  })
})
