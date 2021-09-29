// Category.test.js
/* global describe, it, expect */
import React from 'react'
import { render } from '@testing-library/react'
import { GET_PHOTOS, withPhotos } from '.'
import { Provider } from '../../Context'
import { MockedProvider } from '@apollo/react-testing'

describe('withPhotos', () => {
  it('snapshot', () => {
    const mocks = [
      {
        request: {
          query: GET_PHOTOS
        },
        result: {
          data: {}
        }
      }
    ]
    const WithPhotos = withPhotos(() => <div>test</div>)
    const { asFragment } = render(
      <Provider>
        <MockedProvider mocks={mocks} addTypename={false}>
          <WithPhotos />
        </MockedProvider>
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
