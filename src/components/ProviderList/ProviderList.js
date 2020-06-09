import React, { Component } from 'react'
import { ResponsiveGrid } from '../ResponsiveGrid'
import { ProviderCard } from '../ProviderCard'
import { getServiceProviders } from '../../api/spreadSheet'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'
import { ErrorCard } from '../ErrorCard/ErrorCard'

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
  large: [{ name: 'card', start: [1, 0], end: [0, 0] }],
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
      providers: [],
    }
  }

  loadServiceProvicers = async () => {
    const serviceProvidersJson = await getServiceProviders()
    this.setState({ providers: serviceProvidersJson })
  }

  componentDidMount() {
    this.loadServiceProvicers()
  }

  render() {
    const { providers } = this.state
    return (
      <Grommet full theme={customBreakpoints}>
        {providers && providers.length > 0 ? (
          <ResponsiveGrid columns={columns} rows={rows} areas={fixedGridAreas}>
            {providers.map((provider, id) => (
              <ProviderCard
                key={id}
                gridArea="card"
                name={provider['Nome do profissional ']}
                licenseNumber={provider['Número de cadastro profissional ']}
                category={provider['Categoria ']}
                specialty={provider['Especialidade ']}
                videoCallAvailability={true}
                phoneNumber={provider['Telefone ']}
                email={provider['E-mail ']}
                city={provider['Cidade ']}
                state={provider['Estado ']}
                healthInsurance={provider['Planos de saúde aceitos']}
                experience={provider['Apresentação ']}
                address={provider['Endereço de atendimento ']}
                videoCallPlatform={provider['Plataforma de Atendimento ']}
              />
            ))}
          </ResponsiveGrid>
        ) : (
          <ErrorCard />
        )}
      </Grommet>
    )
  }
}

export { ProviderList }
