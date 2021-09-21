// Category.test.js
/* global describe, it, expect */
import React from 'react'
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { PhotoCard } from '.'
import { MockedProvider } from '@apollo/react-testing'
import { LIKE_PHOTO } from '../../hooks/useToggleLike'

describe('PhotoCard', () => {
  it('snapshot', () => {
    const mocks = [
      {
        request: {
          query: LIKE_PHOTO
        },
        result: {
          data: {}
        }
      }
    ]
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PhotoCard id='1' liked={false} likes={0} src='' />
      </MockedProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
