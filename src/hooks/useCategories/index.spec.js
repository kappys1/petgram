/* global describe, it, expect jest */
import { renderHook } from '@testing-library/react-hooks'
import { useCategoriesData } from '.'

describe('useCategoriesDatawithPhotos', () => {
  it('fist test', async () => {
    const dummyMoviesData = [
      { id: '1', cover: 'some-1', path: '/', emoji: '' },
      { id: '1', cover: 'some-1', path: '/', emoji: '' },
      { id: '1', cover: 'some-1', path: '/', emoji: '' }
    ]
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(dummyMoviesData)
      })
    )
    const { result, waitForNextUpdate } = renderHook(() => useCategoriesData())
    await waitForNextUpdate()
    expect(result.current.loading).toBe(false)
  })
})
