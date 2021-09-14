import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Provider } from './Context'
import * as serviceWorker from './serviceWorker'

const client = new ApolloClient({
  uri: 'https://petgram-server-kappys-5p5zyiegt-kappys1.vercel.app/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      },
      onError: error => {
        const { networkError } = error
        if (networkError && networkError.result.code === 'invalid_token') {
          window.sessionStorage.removeItem('token')
          window.location.href = '/'
        }
      }
    })
  }
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

serviceWorker.register()
