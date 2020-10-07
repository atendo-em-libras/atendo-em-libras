import React, { Component } from 'react'
import { ProviderCard } from '../ProviderCard'
import { ErrorCard } from '../ErrorCard'
import ProviderApi from '../../api/provider'
import styled from 'styled-components'
import { Box } from 'grommet'
import { respondTo } from '../../utils/breakpoints/_respondTo'
import { ResponsiveGrid } from '../ResponsiveGrid'

const columns = {
  small: ['auto'],
  medium: ['auto'],
  large: ['auto', 'auto'],
}
const cardGap = '30px'

const rows = {
  small: ['auto'],
  medium: ['auto'],
  large: ['auto'],
}

const ColumnsContainer = styled.div`
  display: block;
  ${respondTo.desktop`
    columns: 2;
    column-gap: ${cardGap};
  `}
`

const fixedGridAreas = {
  small: [{ name: 'card', start: [0, 0], end: [0, 0] }],
  medium: [{ name: 'card', start: [0, 0], end: [0, 0] }],
  large: [{ name: 'card', start: [0, 0], end: [1, 0] }],
}

const Column = styled(Box)`
  break-inside: avoid;
`

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

    return providers && providers.length > 0 ? (
      <ResponsiveGrid columns={columns} rows={rows} areas={fixedGridAreas} justify="center" gapRow="50px" gapCol="50px">
        {providers.map((provider, index) => {
          return <ProviderCard key={index} provider={provider} gridArea="card" />
        })}
      </ResponsiveGrid>
    ) : (
      <ErrorCard onClick={this.handleClick} />
    )
  }
}

export { ProviderList }
