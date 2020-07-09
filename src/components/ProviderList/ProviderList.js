import React, { Component } from 'react'
import { ResponsiveGrid } from '../ResponsiveGrid'
import { ProviderCard } from '../ProviderCard'
import { ErrorCard } from '../ErrorCard'
import ProviderApi from '../../api/provider'

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
      isLoaded: false,
      providers: [],
    }
  }

  loadServiceProvicers = async () => {
    const serviceProvidersJson = await ProviderApi.get()
    this.setState({ isLoaded: true })
    this.setState({ providers: serviceProvidersJson })
  }

  handleClick = () => {
    window.location.reload()
  }

  componentDidMount() {
    this.loadServiceProvicers()
  }

  render() {
    const { isLoaded, providers } = this.state

    if (!isLoaded) {
      return <div data-testid="emptyList"></div>
    }

    return false && providers.length > 0 ? (
      <ResponsiveGrid columns={columns} rows={rows} areas={fixedGridAreas} justify="center" gapRow="50px" gapCol="50px">
        {providers.map((provider, id) => {
          return provider.showCard && <ProviderCard key={id} gridArea="card" provider={provider} />
        })}
      </ResponsiveGrid>
    ) : (
      <ErrorCard onClick={this.handleClick} />
    )
  }
}

export { ProviderList }
