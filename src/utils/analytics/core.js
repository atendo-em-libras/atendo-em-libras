import ReactGA from 'react-ga'

/*
  This is a wrapper to ReactGA.
  Instead of directly importing ReactGA
  in our app, we should import these functions
  instead.

  This was done to grant us more control over the API, allowing
  us to extend its behavior if we desire.
 */
export function initializeAnalytics({ environment }) {
  const options = {
    testMode: !(environment === 'production'),
  }

  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY, options)
}

export function pageViewAnalytics(page) {
  ReactGA.pageview(page)
}
