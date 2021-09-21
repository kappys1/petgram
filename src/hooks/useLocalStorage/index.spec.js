/* global describe, it, expect */
import { renderHook } from '@testing-library/react-hooks'
import { useLocalStorage } from '.'

describe('useInputValue', () => {
  it('fist test', () => {
    const { result, waitFor } = renderHook(() => useLocalStorage('test', 'test'))
    waitFor(() => {
      expect(result.current.storedValue).toBe('test')
    })
  })
})
