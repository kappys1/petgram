// const db = require('../adapter')
const { ObjectID } = require('mongodb')
const {
  editElementCollection,
  getAllElementsCollection,
  getElementCollection
} = require('../utils.js')

const mediaCollection = 'medias'

async function find ({ id, favs = [] }) {
  const media = await getElementCollection(mediaCollection, id)
  const favsParsed = favs.map(fav => fav.toString())
  return {
    ...media,
    liked: favsParsed.includes(id)
  }
}

async function addLike (media) {
  const newMedia = { ...media, likes: media.likes + 1 }
  await editElementCollection(mediaCollection, {
    _id: ObjectID(media._id),
    input: {
      $set: {
        likes: newMedia.likes
      }
    }
  })
  return newMedia
}

async function removeLike (media) {
  const newMedia = { ...media, likes: media.likes - 1 }
  await editElementCollection(mediaCollection, {
    _id: ObjectID(media._id),
    input: {
      $set: {
        likes: newMedia.likes
      }
    }
  })
  return newMedia
}

async function list ({ categoryId, ids, favs = [] }) {
  let medias
  if (categoryId && categoryId !== 'all') {
    medias = await getAllElementsCollection(mediaCollection, { categoryId: ObjectID(categoryId) })
  } else if (ids) {
    medias = await getAllElementsCollection(mediaCollection, { _id: { $in: ids } })
  } else {
    medias = await getAllElementsCollection(mediaCollection)
  }
  return medias.map(media => ({
    ...media,
    liked: favs.includes(media._id.toString())
  }))
}

module.exports = { find, addLike, removeLike, list, mediaCollection }
