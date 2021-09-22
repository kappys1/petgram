// Category.test.js
/* global describe, it, expect afterAll jest */
import React from 'react'
// import renderer from 'react-test-renderer'
import { act, render } from '@testing-library/react'
import { ListOfCategories } from '.'

describe('ListOfCategories', () => {
  afterAll(() => {
    global.fetch.mockClear()
    delete global.fetch
  })
  it('snapshot', () => {
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

    act(() => {
      const { asFragment } = render(<ListOfCategories />)
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
