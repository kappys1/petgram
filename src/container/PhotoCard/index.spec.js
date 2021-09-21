// Category.test.js
/* global describe, it, expect, afterEach, jest */
import React from 'react'
import { render } from '@testing-library/react'
import { GET_SINGLE_PHOTO, PhotoCardWithQuery } from '.'
import { Provider } from '../../Context'
import { MockedProvider } from '@apollo/react-testing'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

describe('PhotoCardWithQuery', () => {
  const getMock = (isError = false) => {
    const request = {
      query: GET_SINGLE_PHOTO,
      variables: {
        id: 1
      }
    }

    const result = {
      data: {
        photo: {
          id: '1',
          categoryId: 12,
          src: '',
          likes: 2,
          userId: 1,
          liked: false
        }
      }
    }
    const error = new Error('An error occurred')
    return [{ request, result: result, error: isError ? error : null }]
  }

  const getWrapper = (error = false) => (
    <Provider>
      <MockedProvider mocks={getMock(error)} addTypename={false}>
        <PhotoCardWithQuery id={1} />
      </MockedProvider>
    </Provider>
  )
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('snapshot', () => {
    const Wrapper = getWrapper()
    const res = render(Wrapper)
    expect(res.asFragment()).toMatchSnapshot()
  })

  it('should render the PhotoCardWithQuery', async () => {
    const Wrapper = getWrapper()
    const wrapper = mount(Wrapper)
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
      await wrapper.update()
    })
    expect(wrapper.find('PhotoCardWithQuery').exists()).toBeTruthy()
  })

  it('should render the error', async () => {
    const Wrapper = getWrapper(true)
    const wrapper = mount(Wrapper)
    // await new Promise(resolve => setTimeout(resolve, 0))
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
      await wrapper.update()
    })
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })
})
