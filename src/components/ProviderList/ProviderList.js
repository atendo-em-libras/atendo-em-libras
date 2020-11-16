import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import { ProviderCard } from '../ProviderCard'
import { ErrorCard } from '../ErrorCard'
import ProviderApi from '../../api/provider'
import { ResponsiveGrid } from '../ResponsiveGrid'
import { COLORS } from '../../constants/colors'
import Filter from './Filter'

const columns = {
  small: ['auto'],
  medium: ['auto'],
  large: ['auto', 'auto'],
}

const rows = {
  small: ['auto'],
  medium: ['auto'],
  large: ['auto'],
}

const fixedGridAreas = {
  small: [{ name: 'card', start: [0, 0], end: [0, 0] }],
  medium: [{ name: 'card', start: [0, 0], end: [0, 0] }],
  large: [{ name: 'card', start: [0, 0], end: [1, 0] }],
}

class ProviderList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      providers: [],
    }
  }

  loadServiceProvicers = async () => {
    this.setState({ isLoading: true })
    const serviceProvidersJson = await ProviderApi.get()
    this.setState({ isLoading: false, providers: serviceProvidersJson })
  }

  handleClick = () => {
    window.location.reload()
  }

  componentDidMount() {
    this.loadServiceProvicers()
  }

  render() {
    const { isLoading, providers } = this.state

    if (isLoading) {
      return <ReactLoading className="loading-list" color={COLORS.brand} type="spinningBubbles" />
    }

    return (
      <React.Fragment>
        <Filter />
        {providers && providers.length > 0 ? (
          <ResponsiveGrid
            columns={columns}
            rows={rows}
            areas={fixedGridAreas}
            justify="center"
            gapRow="50px"
            gapCol="50px"
          >
            {providers.map((provider, index) => {
              return <ProviderCard key={index} provider={provider} gridArea="card" />
            })}
          </ResponsiveGrid>
        ) : (
          <ErrorCard onClick={this.handleClick} />
        )}
      </React.Fragment>
    )
  }
}
export { ProviderList }
