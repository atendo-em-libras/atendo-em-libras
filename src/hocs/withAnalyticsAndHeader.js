import React from 'react'
import Analytics from '../utils/analytics'
import { Header } from '../components/Header'

function withAnalyticsAndHeader(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      const {
        location: { pathname: page },
      } = this.props

      Analytics.pageview(page)
    }

    render() {
      return (
        <>
          <Header />
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }
}

export { withAnalyticsAndHeader }
