import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateRoute({ children, ...rest }) {

  const user = useSelector(state => state.aboutMe)

  console.log(user)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isMe ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/user/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default PrivateRoute
