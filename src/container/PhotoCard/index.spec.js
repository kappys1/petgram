// Category.test.js
/* global describe, it, expect */
import React from 'react'
import { render } from '@testing-library/react'
import { GET_SINGLE_PHOTO, PhotoCardWithQuery } from '.'
import { Provider } from '../../Context'
import { MockedProvider } from '@apollo/react-testing'

describe('PhotoCardWithQuery', () => {
  it('snapshot', () => {
    const mocks = [
      {
        request: {
          query: GET_SINGLE_PHOTO
        },
        result: {
          data: {}
        }
      }
    ]
    const { asFragment } = render(
      <Provider>
        <MockedProvider mocks={mocks} addTypename={false}>
          <PhotoCardWithQuery />
        </MockedProvider>
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
