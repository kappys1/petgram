// Category.test.js
/* global describe, it, expect jest */
// import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { useCategoriesData } from '.'

describe('useCategoriesDatawithPhotos', () => {
  it('fist test', () => {
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
    let test = {}
    act(() => {
      test = renderHook(() => useCategoriesData())
    })

    const { result } = test
    console.log(result.current)
    expect(result.current.loading).toBe(true)
  })
})
