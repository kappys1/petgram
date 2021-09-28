const db = require('../adapter')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const { getElementCollection, editElementCollection, getElementCollectionByQuery, createElementIntoCollection, getAllElementsCollection } = require('../utils')
const { ObjectID } = require('mongodb')
const { photoCollection } = require('./photosModel')

const userCollections = 'users'

async function addFav ({ id, photoId }) {
  const photo = await getElementCollection(photoCollection, ObjectID(photoId))
  const user = await getElementCollection(userCollections, ObjectID(id))
  if (!photo || !user) {
    throw new Error('La persona o el curso no exite')
  }
  await editElementCollection(userCollections, {
    _id: ObjectID(id),
    input: { $addToSet: { favs: ObjectID(photoId) } }
  })
}

async function removeFav ({ id, photoId }) {
  // db.get('users').find({ id }).update('favs', favs => favs.filter(fav => fav !== photoId)).write()
  const photo = await getElementCollection(photoCollection, ObjectID(photoId))
  const user = await getElementCollection(userCollections, ObjectID(id))
  if (!photo || !user) {
    throw new Error('La persona o el curso no exite')
  }
  await editElementCollection(userCollections, {
    _id: ObjectID(id),
    input: { $pull: { favs: ObjectID(photoId) } }
  })
}

async function hasFav ({ id, photoId }) {
  // const user = db.get('users').find({ id }).value()
  const user = await getElementCollection(userCollections, id)
  const favParses = user.favs.map(fav => fav.toString())
  const hasFav = favParses.includes(photoId)

  return hasFav
}

async function create ({ email, password }) {
  const avatarHash = crypto.createHash('md5').update(email).digest('hex')
  const avatar = `https://gravatar.com/avatar/${avatarHash}`

  // Create a user
  const user = {
    // id: uuidv1(), // with a unique user id
    password: await bcrypt.hash(password, 10), // with the encrypted password
    favs: [],
    avatar,
    email
  }

  // Write in db.json
  const newUser = await createElementIntoCollection(userCollections, user)

  return newUser
}

async function find ({ email }) {
  return await getElementCollectionByQuery(userCollections, { email })
}

module.exports = { create, addFav, hasFav, removeFav, find }
