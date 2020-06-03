import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProviderCard.css'
import { Card } from './Card'
import { CategoryBadge } from './CategoryBadge'
import { Paragraph } from 'grommet'
import { SectionTitle } from './SectionTitle'
import { License } from './License'
import { SectionBlock } from './SectionBlock'
import video from '../../assets/ic_video.svg'

class ProviderCard extends Component {

  render() {
    const { name, category, specialty, licenseNumber, videoCallAvailability, 
      phoneNumber, email, experience, healthInsurance, videoCallPlataform,
      city, state, adress } = this.props
    return (
      <Card className='providerCard'>
        { videoCallAvailability && 
        <div className='providerVideoCallAvailability'>
          <img src={video} alt="" />
          <span >Atende Online</span>
        </div> }
        <div className='providerCardHeader'>
          <CategoryBadge category={category} />
          <p className='providerSpecialty'>{ specialty }</p>
        </div>
        <div className='providerCardBody'>
          <div className='providerCardColumn'>
            <p className='providerName'>{ name }</p>
            <License>
              <p className="title">REGISTRO</p>
              <p className="number">{ licenseNumber }</p>
            </License>
            {experience && <Paragraph size="small">{ experience }</Paragraph>}
            {city && state && <Paragraph size="small">{`${ city } - ${ state }`}</Paragraph>}
            <Paragraph size="small">{ adress }</Paragraph>
          </div>
          <div className='providerCardColumn'>
              <SectionBlock>
                  <SectionTitle>Contato</SectionTitle>
                  <p>{ phoneNumber }</p>
                  <p>{ email }</p>
              </SectionBlock>
              {videoCallPlataform && <SectionBlock>
                  <SectionTitle>Atendimento online</SectionTitle>
                   <p>{ videoCallPlataform }</p>
              </SectionBlock>}
              <SectionBlock>
                  <SectionTitle>Planos de saúde</SectionTitle>
                  <p>{ healthInsurance }</p>
              </SectionBlock>
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

ProviderCard.defaultProps = {
  healthInsurance: "Não informados",
}

export { ProviderCard };