import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from './Card'
import { CategoryBadge } from './CategoryBadge/CategoryBadge'
import { Paragraph, Box } from 'grommet'
import { SectionTitle } from './SectionTitle'
import { License } from './License'
import { SectionBlock } from './SectionBlock'
import { IconText } from './IconText'
import { ExerienceText } from './ExperienceText'
import { videoIcon, phoneIcon, emailIcon, addressIcon, healthInsuranceIcon } from '../../assets/icons'
import { ResponsiveGrid } from '../ResponsiveGrid'

class ProviderCard extends Component {
  render() {
    const columns = {
      small: ['auto'],
      medium: ['1/2', '1/2'],
      large: ['1/2', '1/2'],
      xlarge: ['1/2', '1/2'],
    }

    const rows = {
      small: ['auto', 'auto', 'auto'],
      medium: ['auto', 'auto'],
      large: ['auto', 'auto'],
      xlarge: ['auto', 'auto'],
    }

    const fixedGridAreas = {
      small: [
        { name: 'header', start: [0, 0], end: [0, 0] },
        { name: 'first', start: [0, 1], end: [0, 1] },
        { name: 'second', start: [0, 2], end: [0, 2] },
      ],
      medium: [
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'first', start: [0, 1], end: [0, 1] },
        { name: 'second', start: [1, 1], end: [1, 1] },
      ],
      large: [
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'first', start: [0, 1], end: [0, 1] },
        { name: 'second', start: [1, 1], end: [1, 1] },
      ],
      xlarge: [
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'first', start: [0, 1], end: [0, 1] },
        { name: 'second', start: [1, 1], end: [1, 1] },
      ],
    }

    const {
      name,
      category,
      specialty,
      licenseNumber,
      videoCallAvailability,
      phoneNumber,
      email,
      experience,
      healthInsurance,
      videoCallPlatform,
      city,
      state,
      address,
    } = this.props

    return (
      <Card className="providerCard" role="provider">
        <ResponsiveGrid columns={columns} rows={rows} areas={fixedGridAreas}>
          <Box gridArea="header">
            {videoCallAvailability && (
              <span className="providerVideoCallAvailability">
                <IconText src={videoIcon} alt="video icon" />
                Atende Online
              </span>
            )}
            <CategoryBadge category={category} />
          </Box>
          <Box gridArea="first" className="providerCardColumn">
            <p className="providerName">{name}</p>
            <p className="providerSpecialty">{specialty}</p>
            <License>
              <p className="title">REGISTRO</p>
              <p className="number">{licenseNumber}</p>
            </License>
            {experience && <ExerienceText size="small">{experience}</ExerienceText>}
            <SectionBlock>
              {city && state && (
                <SectionTitle>
                  <IconText src={addressIcon} alt="address icon" />
                  {`${city} - ${state}`}
                </SectionTitle>
              )}
              <Paragraph size="small">{address}</Paragraph>
            </SectionBlock>
          </Box>
          <Box gridArea="second" className="providerCardColumn">
            <SectionBlock>
              <SectionTitle>Contato</SectionTitle>
              <p>
                <IconText src={phoneIcon} alt="phone icon" />
                <span> {phoneNumber}</span>
              </p>
              <Paragraph size="small">
                <IconText src={emailIcon} alt="e-mail icon" />
                <span> {email}</span>
              </Paragraph>
            </SectionBlock>
            {videoCallPlatform && (
              <SectionBlock>
                <SectionTitle>Atendimento online</SectionTitle>
                <p>
                  <IconText src={videoIcon} alt="video icon" />
                  <span>{videoCallPlatform}</span>
                </p>
              </SectionBlock>
            )}
            <SectionBlock>
              <SectionTitle>Planos de saúde</SectionTitle>
              <p>
                <IconText src={healthInsuranceIcon} alt="card icon" />
                {healthInsurance}
              </p>
            </SectionBlock>
          </Box>
        </ResponsiveGrid>
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
  videoCallPlatform: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  address: PropTypes.string,
}

ProviderCard.defaultProps = {
  healthInsurance: 'Não informados',
}

export { ProviderCard }
