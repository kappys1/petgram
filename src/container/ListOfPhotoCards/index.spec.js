// Category.test.js
/* global describe, it, expect */
import { render, screen } from '@testing-library/react'
import { ListOfPhotoCards } from '.'
import { GET_PHOTOS } from '../../hoc/withPhotos'
import { generateMock, getMockProviders } from '../../test/utils'
describe('ListOfPhotoCards', () => {
  const resultQuery = {
    photos: [
      {
        id: '1',
        categoryId: 12,
        src: '',
        likes: 2,
        userId: 1,
        liked: false
      }
    ]
  }

  it('snapshot', () => {
    const mock = generateMock(GET_PHOTOS, resultQuery)
    const Wrapper = getMockProviders(ListOfPhotoCards, mock)
    const { asFragment } = render(Wrapper)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render the PhotoCard', async () => {
    const mock = generateMock(GET_PHOTOS, resultQuery)
    const Wrapper = getMockProviders(ListOfPhotoCards, mock, {})
    render(Wrapper)
    const item = await screen.findAllByRole('list')
    expect(item).toBeTruthy()
  })
})
