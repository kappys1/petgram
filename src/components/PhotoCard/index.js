import React from 'react'
import { Img } from './styles'
import { PropTypes } from 'prop-types'
import { Card } from '../Card'
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = (props) => {
  const { _id, src = DEFAULT_IMAGE } = props
  return (
    <Card {...props}>
      <Img src={src} alt={`Photo card ${_id}`} />
    </Card>
  )
}

PhotoCard.propTypes = {
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
