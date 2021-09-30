import React, { useEffect } from 'react'
import { Article, ContentDescription, Description, HeaderCard, HeaderImage, ImgWrapper, NameAccount } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { PropTypes } from 'prop-types'

import { useToggleLike } from '../../hooks/useToggleLike'
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const Card = ({ _id, liked, likes = 0, src = DEFAULT_IMAGE, description = '', children, onShow }) => {
  const [show, ref] = useNearScreen(false)
  const { toggleLike } = useToggleLike()
  const handleFavClick = () => {
    toggleLike({
      variables: {
        input: { _id }
      }
    })
  }
  useEffect(() => {
    if (onShow) {
      onShow(show)
    }
  }, [show])
  return (
    <Article ref={ref}>
      {show && (
        <>
          <HeaderCard>
            <HeaderImage src={DEFAULT_IMAGE} />
            <NameAccount>kappys1</NameAccount>
          </HeaderCard>
          {/* <Link to={`/detail/${_id}`}> */}
          <ImgWrapper onDoubleClick={handleFavClick}>
            {children}
          </ImgWrapper>
          {/* </Link> */}
          <ContentDescription>
            <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
            <Description>{description}</Description>
          </ContentDescription>
        </>
      )}
    </Article>
  )
}

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} vale must be greater than 0`)
    }
  }
}
