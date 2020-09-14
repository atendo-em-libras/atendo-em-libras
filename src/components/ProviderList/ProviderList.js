import React, { Component } from 'react'
import { ProviderCard } from '../ProviderCard'
import { ErrorCard } from '../ErrorCard'
import ProviderApi from '../../api/provider'
import styled from 'styled-components'
import { Box } from 'grommet'
import { respondTo } from '../../utils/breakpoints/_respondTo'

const cardGap = '30px'

const ColumnsContainer = styled.div`
  display: block;

  ${respondTo.desktop`
    columns: 2;
    column-gap: ${cardGap};
  `}
`

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
    console.log(providers)
    return providers && providers.length > 0 ? (
      <ColumnsContainer>
        {providers.map((provider) => {
          return (
            <Column>
              <Box margin={{ bottom: cardGap }}>
                <ProviderCard key={provider.id} provider={provider} />
              </Box>
            </Column>
          )
        })}
      </ColumnsContainer>
    ) : (
      <ErrorCard onClick={this.handleClick} />
    )
  }
}

export { ProviderList }
