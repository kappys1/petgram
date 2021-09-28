// Category.test.js
/* global describe, it, expect */
import React from 'react'
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { Layout } from '.'

describe('Layout', () => {
  it('snapshot', () => {
    const { asFragment } = render(<Layout />)
    expect(asFragment()).toMatchSnapshot()
  })
})
