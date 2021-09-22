// Category.test.js
/* global describe, it, expect */
import { render, screen, waitFor } from '@testing-library/react'
import { FavsWithQuery, GET_FAVS } from '.'
import { generateMock, getMockProviders } from '../../test/utils'
describe('FavsWithQuery', () => {
  const resultQuery = {
    favs: [
      {
        id: '1',
        categoryId: 12,
        src: '',
        likes: 2,
        userId: 1
      }
    ]
  }
  it('snapshot', () => {
    const mock = generateMock(GET_FAVS, resultQuery)
    const Wrapper = getMockProviders(FavsWithQuery, mock, {})
    const { asFragment } = render(Wrapper)
    expect(asFragment()).toMatchSnapshot()
  })
  it('should render the FavsWithQuery', async () => {
    const mock = generateMock(GET_FAVS, resultQuery)
    const Wrapper = getMockProviders(FavsWithQuery, mock, {})
    render(Wrapper)
    await waitFor(() => expect(screen.getByRole('link')).toBeInTheDocument())
  })

  it('should render the error', async () => {
    const mock = generateMock(GET_FAVS, resultQuery, {}, true)
    const Wrapper = getMockProviders(FavsWithQuery, mock, {})
    render(Wrapper)
    await waitFor(() => expect(screen.getByText(/error/gm)).toBeInTheDocument())
  })
})
