// Category.test.js
/* global describe, it, expect */
import React from 'react'
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { NavBar } from '.'

describe('NavBar', () => {
  it('snapshot', () => {
    const { asFragment } = render(<NavBar />)
    expect(asFragment()).toMatchSnapshot()
  })
})
