// Category.test.js
/* global describe, it, expect */
import React from 'react'
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { ListOfPhotoCardsComponent } from '.'

describe('ListOfPhotoCardsComponent', () => {
  it('snapshot', () => {
    const data = { photos: [] }
    const { asFragment } = render(<ListOfPhotoCardsComponent data={data} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
