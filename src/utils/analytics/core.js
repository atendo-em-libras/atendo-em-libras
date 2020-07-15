import ReactGA from 'react-ga'

export function initializeAnalytics({ environment }) {
  const options = {
    ...(environment !== 'production' && { testMode: true }),
  }

  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY, options)
}
