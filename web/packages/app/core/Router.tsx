import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Loader from "@karrate/ui/atoms/Loader";

/**
 * Lazy load routes
 */
const HomePage = lazy(() => import('../pages/HomePage'))
const LogoutPage = lazy(() => import('../pages/LogoutPage'))
const AboutUs = lazy(() => import('../pages/AboutUs'))
const Contact = lazy(() => import('../pages/Contact'))
const Articles = lazy(() => import('../pages/Articles'))
const Article = lazy(() => import('../pages/Article'))
const Events = lazy(() => import('../pages/Events'))
const EventPage = lazy(() => import('../pages/EventPage'))
const AuthLayout = lazy(() => import('../layouts/AuthLayout'))

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/logout">
          <Suspense fallback={<Loader />}>
            <LogoutPage />
          </Suspense>
        </Route>
        <Route path="/auth/:pageName">
          <Suspense fallback={<Loader />}>
            <AuthLayout />
          </Suspense>
        </Route>
        <Route exact path="/">
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        </Route>
        <Route exact path="/despre-noi">
          <Suspense fallback={<Loader />}>
            <AboutUs />
          </Suspense>
        </Route>
        <Route exact path="/articole">
          <Suspense fallback={<Loader />}>
            <Articles />
          </Suspense>
        </Route>
        <Route exact path="/articole/:articleId">
          <Suspense fallback={<Loader />}>
            <Article />
          </Suspense>
         </Route>
        <Route exact path="/evenimente">
          <Suspense fallback={<Loader />}>
            <Events />
          </Suspense>
        </Route>
        <Route exact path="/evenimente/:eventId">
          <Suspense fallback={<Loader />}>
            <EventPage />
          </Suspense>
         </Route>
        <Route exact path="/contact">
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
