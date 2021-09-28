import React from 'react'
import { Article, Img, ImgWrapper } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'
import { PropTypes } from 'prop-types'
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ _id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen(false)

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/detail/${_id}`}>
            <ImgWrapper>
              <Img src={src} alt={`Photo card ${_id}`} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({
                    variables: {
                      input: { _id }
                    }
                  })
                }
                return <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
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
