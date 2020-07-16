import ReactGA from 'react-ga'

/*
  This is a facade to ReactGA.
  Instead of directly importing ReactGA
  in our app, we should import these functions
  instead.

  This was done to grant us more control over the API, allowing
  us to extend its behavior if we desire.
 */
export function setUpAndInitialize() {
  const options = {
    environment: process.env.NODE_ENV,
    analyticsKey: process.env.REACT_APP_GOOGLE_ANALYTICS_KEY,
  }

  initialize(options)
}

export function initialize({ environment, analyticsKey }) {
  const options = {
    testMode: !(environment === 'production'),
  }

  ReactGA.initialize(analyticsKey, options)
}

export function pageview(page) {
  ReactGA.pageview(page)
}
