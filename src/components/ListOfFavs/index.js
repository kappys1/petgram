import React from 'react'
import { Grid, Image, Link } from './styles'
import { PropTypes } from 'prop-types'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(fav =>
          <Link key={fav._id} to={`/detail/${fav._id}`}>
            <Image src={fav.src} alt={`images favs ${fav._id}`} />
          </Link>
        )
      }
    </Grid>
  )
}

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
