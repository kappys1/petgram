import React, { createContext, useReducer, useContext } from 'react'
const Context = createContext()

const initialState = {
  isAuth: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'activeAuth':
      return {
        ...state,
        isAuth: true
      }

    default:
      return state
  }
}

export const Provider = ({ children }) => {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  )
}

export const useStateValue = () => useContext(Context)
