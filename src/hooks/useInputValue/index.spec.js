/* global describe, it, expect */
import { renderHook } from '@testing-library/react-hooks'
import { useInputValue } from '.'

describe('useInputValue', () => {
  it('fist test', () => {
    const { result } = renderHook(() => useInputValue('test'))
    expect(result.current.value).toBe('test')
  })
})
