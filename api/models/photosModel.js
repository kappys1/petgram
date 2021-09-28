// const db = require('../adapter')
const { ObjectID } = require('mongodb')
const {
  editElementCollection,
  getAllElementsCollection,
  getElementCollection
} = require('../utils.js')

const photoCollection = 'photos'

async function find ({ id, favs = [] }) {
  const photo = await getElementCollection(photoCollection, id)
  const favsParsed = favs.map(fav => fav.toString())
  return {
    ...photo,
    liked: favsParsed.includes(id)
  }
}

async function addLike (photo) {
  const newPhoto = { ...photo, likes: photo.likes + 1 }
  await editElementCollection(photoCollection, {
    _id: ObjectID(photo._id),
    input: {
      $set: {
        likes: newPhoto.likes
      }
    }
  })
  return newPhoto
}

async function removeLike (photo) {
  const newPhoto = { ...photo, likes: photo.likes - 1 }
  await editElementCollection(photoCollection, {
    _id: ObjectID(photo._id),
    input: {
      $set: {
        likes: newPhoto.likes
      }
    }
  })
  return newPhoto
}

async function list ({ categoryId, ids, favs = [] }) {
  let photos
  if (categoryId && categoryId !== 'all') {
    photos = await getAllElementsCollection(photoCollection, { categoryId: ObjectID(categoryId) })
  } else if (ids) {
    photos = await getAllElementsCollection(photoCollection, { _id: { $in: ids } })
  } else {
    photos = await getAllElementsCollection(photoCollection)
  }
  return photos.map(photo => ({
    ...photo,
    liked: favs.includes(photo.id.toString())
  }))
}

module.exports = { find, addLike, removeLike, list, photoCollection }
