const userModel = require('./models/userModel')
const categoriesModel = require('./models/categoriesModel')
const mediasModel = require('./models/mediasModel')
const { gql } = require('apollo-server-express')
const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const typeDefs = gql`
  type User {
    _id: ID!
    avatar: String
    name: String
    email: String
    favs: [ID!]
    isPremium: Boolean
  }

  enum MediaTypes {
    video
    photo
  }

  type Media {
    _id: ID!
    categoryId: ID
    src: String
    likes: Int
    liked: Boolean
    userId: ID
    type: MediaTypes
  }

  type Category {
    _id: ID!
    cover: String
    name: String
    emoji: String
    path: String
  }

  type Query {
    favs: [Media]
    categories: [Category]
    medias(categoryId: ID): [Media],
    media(id: ID!): Media
  }

  input LikeMedia {
    _id: ID!
  }

  input UserCredentials {
    email: String!
    password: String!
  }

  type Mutation {
    likeAnonymousMedia (input: LikeMedia!): Media
    likeMedia (input: LikeMedia!): Media
    signup (input: UserCredentials!): String
    login (input: UserCredentials!): String
  }
`

async function checkIsUserLogged (context) {
  console.log(context)
  const { email, id } = context
  // check if the user is logged
  if (!id) throw new Error('you must be logged in to perform this action')
  // find the user and check if it exists
  const user = await userModel.find({ email })
  // if user doesnt exist, throw an error
  if (!user) throw new Error('user does not exist')
  return user
}

async function tryGetFavsFromUserLogged (context) {
  try {
    const { email } = await checkIsUserLogged(context)
    const user = await userModel.find({ email })
    return user.favs
  } catch (e) {
    return []
  }
}

const resolvers = {
  Mutation: {
    likeAnonymousMedia: async (_, { input }) => {
      // find the media by id and throw an error if it doesn't exist
      const { id: mediaId } = input
      const media = await mediasModel.find({ id: mediaId })
      if (!media) {
        throw new Error(`Couldn't find media with id ${mediaId}`)
      }
      // put a like to the media
      mediasModel.addLike(media)
      // get the updated medias model
      const actualMedia = mediasModel.find({ id: mediaId })
      return actualMedia
    },
    likeMedia: async (_, { input }, context) => {
      const { _id: userId } = await checkIsUserLogged(context)

      // find the media by id and throw an error if it doesn't exist

      const { _id: mediaId } = input
      const media = await mediasModel.find({ id: mediaId })

      if (!media) {
        throw new Error(`Couldn't find media with id ${mediaId}`)
      }
      const hasFav = await userModel.hasFav({ id: userId, mediaId })
      if (hasFav) {
        await mediasModel.removeLike(media)
        await userModel.removeFav({ id: userId, mediaId })
      } else {
        // put a like to the media and add the like to the user database
        await mediasModel.addLike(media)
        await userModel.addFav({ id: userId, mediaId })
      }

      // get favs from user before exiting
      const favs = await tryGetFavsFromUserLogged(context)
      // get the updated medias model
      const actualMedia = await mediasModel.find({ id: mediaId, favs })

      return actualMedia
    },
    // Handle user signup
    async signup (_, { input }) {
      // add 1 second of delay in order to see loading stuff
      // await new Promise(resolve => setTimeout(resolve, 1000))

      const { email, password } = input

      const user = await userModel.find({ email })
      if (user) {
        throw new Error('User already exists')
      }

      const newUser = await userModel.create({
        email,
        password
      })

      // return json web token
      return jsonwebtoken.sign(
        { id: newUser._id, email: newUser.email },
        process.env.JWT_SECRET,
        { expiresIn: '365d' }
      )
    },

    // Handles user login
    async login (_, { input }) {
      // add 1 second of delay in order to see loading stuff
      await new Promise(resolve => setTimeout(resolve, 1000))

      const { email, password } = input
      const user = await userModel.find({ email })

      if (!user) {
        throw new Error('No user with that email')
      }

      const valid = await bcrypt.compare(password, user.password)

      if (!valid) {
        throw new Error('Incorrect password')
      }

      // return json web token
      return jsonwebtoken.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '365d' }
      )
    }
  },
  Query: {
    async favs (_, __, context) {
      const { email } = await checkIsUserLogged(context)
      const { favs } = await userModel.find({ email })
      return await mediasModel.list({ ids: favs, favs })
    },
    async categories (_) {
      return await categoriesModel.list()
    },
    async media (_, { id }, context) {
      const favs = await tryGetFavsFromUserLogged(context)
      return await mediasModel.find({ id, favs })
    },
    async medias (_, { categoryId }, context) {
      const favs = await tryGetFavsFromUserLogged(context)
      const medias = await mediasModel.list({ categoryId, favs })
      console.log(medias)
      return medias
    }
  }
}

module.exports = { typeDefs, resolvers }
