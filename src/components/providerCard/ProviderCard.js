import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProviderCard.css'
import { Card } from './Card'
import { CategoryBadge } from './CategoryBadge'
import { Paragraph } from 'grommet'
import { ProviderName } from './ProviderName'

class ProviderCard extends Component {

  render() {
    const { name, category, specialty, licenseNumber, videoCallAvailability, 
      phoneNumber, email, experience, healthInsurance, videoCallPlataform,
      city, state, adress } = this.props
    return (
      <Card className='providerCard'>
        { videoCallAvailability && 
        <p className='providerVideoCallAvailability'>Atende Online</p> }
        <div className='providerCardHeader'>
          <CategoryBadge category={category} />
          <p className='providerSpecialty'>{ specialty }</p>
        </div>
        <div className='providerCardBody'>
          <div className='providerCardColumn'>
            <ProviderName>{ name }</ProviderName>
            <p>REGISTRO</p>
            <p>{ licenseNumber }</p>
            <Paragraph size="small">{ experience }</Paragraph>
            <Paragraph size="small">{`${ city } - ${ state }`}</Paragraph>
            <Paragraph size="small">{ adress }</Paragraph>
          </div>
          <div className='providerCardColumn'>
              <div className="columnBlock">
                  <p>Contato</p>
                  <p>{ phoneNumber }</p>
                  <p>{ email }</p>
              </div>
              <div className="columnBlock">
                  <p>Atendimento online</p>
                  <p>{ videoCallPlataform }</p>
              </div>
              <div className="columnBlock">
                  <p>Planos de saúde</p>
                  <p>{ healthInsurance }</p>
              </div>
          </div>
        </div>
      </Card>
    )
  }
}

ProviderCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  licenseNumber: PropTypes.string.isRequired,
  videoCallAvailability: PropTypes.bool,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  experience: PropTypes.string,
  healthInsurance: PropTypes.string,
  videoCallPlataform: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  adress: PropTypes.string
}

export { ProviderCard };