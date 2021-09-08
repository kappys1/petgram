import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Provider } from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-kappys-5p5zyiegt-kappys1.vercel.app/graphql'
})
ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
  ,
  document.getElementById('app')
)
