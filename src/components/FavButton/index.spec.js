// Category.test.js
/* global describe, it, expect */
import React from 'react'
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { FavButton } from '.'

describe('FavButton', () => {
  it('snapshot', () => {
    const { asFragment } = render(<FavButton likes={0} liked={false} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
