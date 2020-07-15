import React from 'react'
import ReactGA from 'react-ga'

function withAnalytics(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      const {
        location: { pathname: page },
      } = this.props

      ReactGA.pageview(page)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export { withAnalytics }
