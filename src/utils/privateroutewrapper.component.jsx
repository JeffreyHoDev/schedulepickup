import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, isLogin, ...rest }) => {
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLogin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
export default PrivateRoute