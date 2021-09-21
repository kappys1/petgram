// Category.test.js
/* global describe, it, expect */
import React from 'react'
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { Category } from '.'

describe('Category', () => {
  it('snapshot', () => {
    // const component = renderer.create(
    //   <Category />
    // )
    // const tree = component.toJSON()
    // expect(tree).toMatchSnapshot()

    const { asFragment } = render(<Category />)
    expect(asFragment()).toMatchSnapshot()
  })
})
