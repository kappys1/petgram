// Category.test.js
/* global describe, it, expect, afterEach, jest */
import { render, waitFor, screen } from '@testing-library/react'
import { GET_SINGLE_PHOTO, PhotoCardWithQuery } from '.'
import { generateMock, getMockProviders } from '../../test/utils'

describe('PhotoCardWithQuery', () => {
  const resultQuery = {
    photo: {
      id: '1',
      categoryId: 12,
      src: '',
      likes: 2,
      userId: 1,
      liked: false
    }
  }
  const props = {
    id: 1
  }
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('snapshot', () => {
    const mock = generateMock(GET_SINGLE_PHOTO, resultQuery)
    const Wrapper = getMockProviders(PhotoCardWithQuery, mock, props)
    const res = render(Wrapper)
    expect(res.asFragment()).toMatchSnapshot()
  })

  it('should render the FavsWithQuery', async () => {
    const mock = generateMock(GET_SINGLE_PHOTO, resultQuery)
    const Wrapper = getMockProviders(PhotoCardWithQuery, mock, {})
    render(Wrapper)
    await waitFor(() => expect(screen.getByRole('article')).toBeInTheDocument())
  })

  it('should render the error', async () => {
    const mock = generateMock(GET_SINGLE_PHOTO, resultQuery, {}, true)
    const Wrapper = getMockProviders(PhotoCardWithQuery, mock, props)
    render(Wrapper)
    await waitFor(() => expect(screen.getByText(/error/gm)).toBeInTheDocument())
  })
})
