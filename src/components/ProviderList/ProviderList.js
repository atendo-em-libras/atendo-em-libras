import React, { Component } from 'react'
import { ResponsiveGrid } from '../ResposiveGrid'
import { ProviderCard } from '../ProviderCard'
import { getServiceProviders } from '../../api/spreadSheet'

const columns = {
  small: ['auto'],
  medium: ['auto', 'auto'],
}

const rows = {
  small: ['auto'],
  medium: ['auto'],
  large: ['auto'],
}

const fixedGridAreas = {
  small: [
    { name: 'header', start: [0, 0], end: [0, 0] },
  ],
  medium: [
    { name: 'header', start: [0, 1], end: [1, 0] },
  ]
}


class ProviderList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      providers: []
    }
  }

  loadServiceProvicers = async () => {
    const serviceProvidersJson = await getServiceProviders()
    this.setState({ providers: serviceProvidersJson })
    console.log(serviceProvidersJson);
  }

  componentDidMount() {
    this.loadServiceProvicers();
  }

  render() {
    const { providers } = this.state;
    return (
      <ResponsiveGrid columns={columns} rows={rows} areas={fixedGridAreas}>
        {providers && providers.map((provider, id) => (
          <ProviderCard key={id}
            name={provider["Nome do profissional "]}
            licenseNumber={provider["Número de cadastro profissional "]}
            category={provider["Categoria "]}
            specialty={provider["Especialidade "]}
            videoCallAvailability={true}
            phoneNumber={provider["Telefone "]}
            email={provider["E-mail "]}
            city={provider["Cidade "]}
            state={provider["Estado "]}
            healthInsurance={provider["Planos de saúde aceitos"]}
            experience={provider["Apresentação "]}
            address={provider["Endereço de atendimento "]}
            videoCallPlatform={provider["Plataforma de Atendimento "]} />

        ))}
      </ResponsiveGrid>
    )
  }
}

export { ProviderList }
