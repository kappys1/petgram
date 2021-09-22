// Category.test.js
/* global describe, it, expect  */
import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { ListOfFavs } from '.'

describe('ListOfFavs', () => {
  it('snapshot', () => {
    act(() => {
      const { asFragment } = render(<ListOfFavs />)
      expect(asFragment()).toMatchSnapshot()
    })
  })

  it('should render Favs', () => {
    const favs = [{
      id: '1',
      src: '2'
    }]
    render(<ListOfFavs favs={favs} />)
    expect(screen.getByRole('link'))
  })
})
