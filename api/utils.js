'use strict'

const connectDB = require('./db')
const { ObjectID } = require('mongodb')
const { errorHandler } = require('./errorHandler')

const getCollection = async (collection) => {
  try {
    const db = await connectDB()
    return await db.collection(collection)
  } catch (error) {
    errorHandler(error)
  }
}

const getAllElementsCollection = async (collection, query = {}) => await getCollection(collection).then(db => db.find(query).toArray())
const getElementCollection = async (collection, id) => await getCollection(collection).then(db => db.findOne({ _id: ObjectID(id) }))
const getElementCollectionByQuery = async (collection, query) => await getCollection(collection).then(db => db.findOne(query))
const getElementCollectionByKeyword = async (collection, keyword) => await getCollection(collection)
  .then(db => db.find({
    $text: {
      $search: keyword
    }
  }).toArray())

const createElementIntoCollection = async (collectionName, input) => {
  try {
    const collection = await getCollection(collectionName)
    const element = await collection.insertOne(input)
    input._id = element.insertedId
    return input
  } catch (error) {
    errorHandler(error)
  }
}

const editElementCollection = async (collectionName, { _id, input }) => {
  try {
    const collection = await getCollection(collectionName)
    await collection.updateOne({ _id: ObjectID(_id) }, input)
    const element = await collection.findOne({ _id: ObjectID(_id) })
    return element
  } catch (error) {
    errorHandler(error)
  }
}
const removeElementCollection = async (collectionName, { _id }) => {
  try {
    const collection = await getCollection(collectionName)
    await collection.deleteOne({ _id: ObjectID(_id) })
    const elements = await getAllElementsCollection(collectionName)
    return elements
  } catch (error) {
    errorHandler(error)
  }
}

const fillNestedTypes = async (collectionName, ids) => {
  try {
    const collection = await getCollection(collectionName)
    const elements = await collection.find({ _id: { $in: ids } }).toArray()
    return elements || []
  } catch (error) {
    errorHandler(error)
  }
}

module.exports = {
  getCollection,
  getAllElementsCollection,
  getElementCollectionByQuery,
  getElementCollection,
  removeElementCollection,
  createElementIntoCollection,
  editElementCollection,
  getElementCollectionByKeyword,
  fillNestedTypes
}
