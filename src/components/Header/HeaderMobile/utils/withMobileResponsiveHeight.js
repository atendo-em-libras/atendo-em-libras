import React from 'react'
import debounce from 'lodash.debounce'

// This was created to solve the issue of viewHeight on mobile
// browers. For more info on the issue read this:
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
//
// This HOC rerenders itself and HeaderMobile everything the
// window.innerHeight is updated. The `innerHeight` does not
// take into account the mobile navBar, so it will always
// render the modal to the proper size.
function withResponsiveHeight(WrappedHeaderMobile) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        height: window.innerHeight,
      }
      // To prevent performance issues we only rerender every 200ms
      this.debounceTime = 50
      this.debouncedOnResize = debounce(this.onResize, this.debounceTime)
    }

    onResize = () => {
      this.setState({ height: window.innerHeight })
    }

    componentDidMount() {
      window.addEventListener('resize', this.debouncedOnResize)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.debouncedOnResize)
    }

    render() {
      return <WrappedHeaderMobile height={this.state.height} {...this.props} />
    }
  }
}

export { withResponsiveHeight }
