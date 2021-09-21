// Category.test.js
/* global describe, it, expect */
import React from 'react'
import { render } from '@testing-library/react'
import { ListOfPhotoCards } from '.'
import { Provider } from '../../Context'
import { MockedProvider } from '@apollo/react-testing'
import { GET_PHOTOS } from '../../hoc/withPhotos'

describe('ListOfPhotoCards', () => {
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
    const { asFragment } = render(
      <Provider>
        <MockedProvider mocks={mocks} addTypename={false}>
          <ListOfPhotoCards />
        </MockedProvider>
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
