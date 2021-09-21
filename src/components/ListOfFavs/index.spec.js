// Category.test.js
/* global describe, it, expect  */
import React from 'react'
// import renderer from 'react-test-renderer'
import { act, render } from '@testing-library/react'
import { ListOfFavs } from '.'

describe('ListOfFavs', () => {
  it('snapshot', () => {
    act(() => {
      const { asFragment } = render(<ListOfFavs />)
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
