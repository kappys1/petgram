/* global describe, it, expect   */
import { act } from '@testing-library/react-hooks'
import { LIKE_PHOTO, useToggleLike } from '.'
import { getHookWrapper } from '../../test/utils'

describe('useRegister', () => {
  it('fist test', async () => {
    const mocks = [
      {
        request: {
          query: LIKE_PHOTO
        },
        result: {
          data: {
            likePhoto: {
              id: '123',
              liked: true,
              likes: 1234
            }
          }
        }
      }
    ]

    const { result, waitForNextUpdate } = getHookWrapper(() => useToggleLike(), mocks)
    act(() => {
      result.current.toggleLike()
    })
    await waitForNextUpdate()
    expect(result.current.data.likePhoto.liked).toBe(true)
  })
})
