// Category.test.js
/* global describe, it, expect */
import React from 'react'
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { UserFormRedirect } from '.'

describe('UserFormRedirect', () => {
  it('snapshot', () => {
    const { asFragment } = render(<UserFormRedirect />)
    expect(asFragment()).toMatchSnapshot()
  })
})
