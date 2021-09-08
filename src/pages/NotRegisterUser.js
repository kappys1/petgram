import React from 'react'
import Context from '../Context'

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <form onSubmit={activateAuth}>
              <button>iniciar sesión</button>
            </form>
          )
        }
      }
    </Context.Consumer>
  )
}
