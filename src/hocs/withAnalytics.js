import React from 'react'
import Analytics from '../utils/analytics'

function withAnalytics(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      const {
        location: { pathname: page },
      } = this.props

      Analytics.pageview(page)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export { withAnalytics }
