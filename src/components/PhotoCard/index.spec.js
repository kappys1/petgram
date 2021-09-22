// Category.test.js
/* global describe, it, expect  */
import { render, screen } from '@testing-library/react'
import { PhotoCard } from '.'
import { LIKE_PHOTO } from '../../hooks/useToggleLike'
import { generateMock, getMockProviders } from '../../test/utils'

describe('PhotoCard', () => {
  const props = {
    id: '1',
    liked: false,
    likes: 1,
    src: ''
  }
  const mock = generateMock(LIKE_PHOTO, {})
  it('snapshot', () => {
    const mock = generateMock(LIKE_PHOTO, {})
    const Wrapper = getMockProviders(PhotoCard, mock, props)
    const { asFragment } = render(Wrapper)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render PhotoCard', async () => {
    const WrapperPhotoCard = getMockProviders(PhotoCard, mock, props)
    render(WrapperPhotoCard)
    const item = await screen.findAllByRole('article')
    expect(item).toBeTruthy()
  })
})
