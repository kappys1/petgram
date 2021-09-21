// Category.test.js
/* global describe, it, expect */
import React from 'react'
// import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { FavsWithQuery, GET_FAVS } from '.'
import { MockedProvider } from '@apollo/react-testing'
import { Provider } from '../../Context'

describe('ListOfFavs', () => {
  it('snapshot', () => {
    const mocks = [
      {
        request: {
          query: GET_FAVS
        },
        result: {
          data: {}
        }
      }
    ]
    const { asFragment } = render(
      <Provider>
        <MockedProvider mocks={mocks} addTypename={false}>
          <FavsWithQuery />
        </MockedProvider>
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
