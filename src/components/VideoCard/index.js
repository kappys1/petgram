import React, { useEffect, useRef } from 'react'
import { Article, ImgWrapper, PlayIcon, Video } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { PropTypes } from 'prop-types'
import { useToggleLike } from '../../hooks/useToggleLike'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer'
const DEFAULT_COVER =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const VideoCard = ({ _id, liked, likes = 0, src = '', cover = DEFAULT_COVER }) => {
  const video = useRef(null)
  const [show, ref] = useNearScreen(false)
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video })
  const { toggleLike } = useToggleLike()
  const handleFavClick = () => {
    toggleLike({
      variables: {
        input: { _id }
      }
    })
  }
  useEffect(() => {
    if (!playing && show) {
      handlePlay()
    }
  }, [show])

  return (
    <Article ref={ref}>
      {show && (
        <>
          <ImgWrapper>
            <Video
              muted
              id={_id}
              controls={false}
              loop
              onClick={handlePlay}
              ref={video}
              src={src} alt={`Photo card ${_id}`}
            />
            {show && !playing && (<PlayIcon onClick={handlePlay} />)}
          </ImgWrapper>
          <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}

VideoCard.propTypes = {
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
