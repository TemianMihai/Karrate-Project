import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Box } from '@material-ui/core'

// import { useAuth } from '@karrate/shared/hooks/user'
import Loader from '@karrate/ui/atoms/Loader'

/**
 * Lazy load routes
 */
const LoginPage = lazy(() => import('../pages/LoginPage'))
const SignUpUser = lazy(() => import('../pages/SignUp'))

const AuthLayout: React.FC = () => {
  // const auth = useAuth()
  //
  // if (auth.authenticated()) {
  //   return <Redirect to="/home" />
  // }

  return (
    <Box>
      <Switch>
        <Route exact path="/auth">
          <Redirect to="/auth/login" />
        </Route>
        <Route exact path="/auth/login">
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        </Route>
        <Route exact path="/auth/sign-up">
          <Suspense fallback={<Loader />}>
            <SignUpUser />
          </Suspense>
        </Route>
      </Switch>
    </Box>
  )
}

export default AuthLayout
