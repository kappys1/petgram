/* global describe, it, expect */
import { renderHook } from '@testing-library/react-hooks'
import { useIntersectionVideoPlayer } from '.'

describe('useIntersectionVideoPlayer', () => {
  it('fist test', () => {
    const { result, waitFor } = renderHook(() => useIntersectionVideoPlayer())
    waitFor(() => {
      expect(result.current.show).toBe(false)
    })
  })
})
