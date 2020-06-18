import React, { Component } from 'react'
import { ResponsiveGrid } from '../ResponsiveGrid'
import { ProviderCard } from '../ProviderCard'
import { getServiceProviders } from '../../api/spreadSheet'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'
import { ErrorCard } from '../ErrorCard'

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

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 700,
      },
      medium: {
        value: 900,
      },
      large: {
        value: 3000,
      },
    },
  },
})

class ProviderList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      providers: [],
    }
  }

  loadServiceProvicers = async () => {
    const serviceProvidersJson = await getServiceProviders()
    this.setState({ isLoaded: true })
    this.setState({ providers: serviceProvidersJson })
  }

  parseVideoCallAvailability = (answer) => {
    if (answer === 'Sim') {
      return true
    } else {
      return false
    }
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

    return (
      <Grommet theme={customBreakpoints}>
        {providers && providers.length > 0 ? (
          <ResponsiveGrid
            columns={columns}
            rows={rows}
            areas={fixedGridAreas}
            justify="center"
            gapRow="50px"
            gapCol="50px"
          >
            {providers.map(
              (provider, id) =>
                provider['Exibir site '] === 'Sim' && (
                  <ProviderCard
                    key={id}
                    gridArea="card"
                    name={provider['Nome do profissional ']}
                    licenseNumber={provider['Número de cadastro profissional ']}
                    category={provider['Categoria ']}
                    specialty={provider['Especialidade ']}
                    videoCallAvailability={this.parseVideoCallAvailability(provider['Atende por videochamada? '])}
                    phoneNumber={provider['Telefone ']}
                    email={provider['E-mail ']}
                    city={provider['Cidade ']}
                    state={provider['Estado ']}
                    healthInsurance={provider['Planos de saúde aceitos']}
                    experience={provider['Apresentação ']}
                    address={provider['Endereço de atendimento ']}
                    videoCallPlatform={provider['Plataforma de Atendimento ']}
                    showCard={provider['Exibir site ']}
                  />
                )
            )}
          </ResponsiveGrid>
        ) : (
          <ErrorCard onClick={this.handleClick} />
        )}
      </Grommet>
    )
  }
}

export { ProviderList }
