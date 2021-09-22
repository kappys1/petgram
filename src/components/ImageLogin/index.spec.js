// Category.test.js
/* global describe, it, expect */
import React from 'react'
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { ImageLogin } from '.'

describe('ImageLogin', () => {
  it('snapshot', () => {
    const { asFragment } = render(<ImageLogin />)
    expect(asFragment()).toMatchSnapshot()
  })
})
