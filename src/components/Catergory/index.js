import React from 'react'
import { Link, Image } from './styles'
import { PropTypes } from 'prop-types'
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpeg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} alt={`category image ${emoji}`} />
    {emoji}
  </Link>
)

Category.propTypes = {
  cover: PropTypes.string,
  path: PropTypes.string,
  emoji: PropTypes.string
}
