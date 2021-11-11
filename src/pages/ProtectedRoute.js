import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useGlobalContext } from '../context'

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useGlobalContext()
  const isLogged = Boolean(window.sessionStorage.getItem('user'))
  return (
    <Route
      {...rest}
      render={() => {
        return isLogged || user ? children : <Redirect to='/'></Redirect>
      }}
    ></Route>
  )
}
export default PrivateRoute
