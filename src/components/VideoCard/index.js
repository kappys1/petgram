import React, { useRef, useState } from 'react'
import { FullScreenIcon, PlayIcon, Video } from './styles'
import { PropTypes } from 'prop-types'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer'
import { Card } from '../Card'
import useFullscreenStatus from '../../hooks/useFullScreenStatus'
const DEFAULT_COVER =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const VideoCard = (props) => {
  const { _id, src = '', cover = DEFAULT_COVER } = props
  const video = useRef(null)
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video })
  const [isFullScreen, setFullscreen] = useFullscreenStatus(video)
  const [show, setShow] = useState(false)
  const handleShow = (show) => {
    if (!playing && show) {
      handlePlay()
    }
    setShow(show)
  }
  const toggleFullScreen = () => {
    setFullscreen(true)
  }
  return (
    <>
      <Card {...props} onShow={handleShow}>
        <Video
          id={_id}
          controls={isFullScreen}
          loop
          onClick={handlePlay}
          ref={video}
          cover={cover}
          src={src} alt={`Photo card ${_id}`}
        />
        {show && !playing && (<PlayIcon onClick={handlePlay} />)}
        <FullScreenIcon onClick={toggleFullScreen}>Full screen</FullScreenIcon>
      </Card>

    </>

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
