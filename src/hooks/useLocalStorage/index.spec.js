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

  it('should get stored value declared', () => {
    window.localStorage.setItem('test', JSON.stringify('test'))
    const { result, waitFor } = renderHook(() => useLocalStorage('test', 'test'))
    waitFor(() => {
      expect(result.current.storedValue).toBe('test')
    })
  })

  it('should change Initial value', () => {
    window.localStorage.setItem('test', JSON.stringify('test'))
    const { result, waitFor } = renderHook(() => useLocalStorage('test', 'test'))
    const [storedValue, setStoredValue] = result.current
    setStoredValue('newTest')
    waitFor(() => {
      expect(storedValue).toBe('newTest')
    })
  })
})
