// Category.test.js
/* global describe, it, expect */
import React from 'react'
// import renderer from 'react-test-renderer'
import { act, render } from '@testing-library/react'
import { UserForm } from '.'

describe('UserForm', () => {
  it('snapshot', () => {
    act(() => {
      const { asFragment } = render(<UserForm title='test' />)
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
