import React, { useState } from 'react'
import {
  SectionTitle,
  License,
  SectionBlock,
  ExerienceText,
  ProviderName,
  ProviderVideoCallAvailabilityContainer,
  ProviderVideoCallAvailability,
  ProviderSpecialty,
  ProviderCardWrapper,
} from './ProviderCardStyles'
import { IconText } from '../IconText'
import PropTypes from 'prop-types'
import { CategoryBadge } from './CategoryBadge'
import { Paragraph, Box, ResponsiveContext, Collapsible } from 'grommet'
import { FormDown, FormUp } from 'grommet-icons'
import { videoIcon, phoneIcon, emailIcon, addressIcon, healthInsuranceIcon } from '../../assets/icons'
import { ResponsiveGrid } from '../ResponsiveGrid'
import { ToggleButton } from './ToggleButton'

const ProviderCard = (props) => {
  const [open, setOpen] = useState(false)

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
    city,
    videoCallPlatform,
    state,
    address,
  } = props.provider

  const ProviderVideoCallAvailabilityLabel = () => (
    <ProviderVideoCallAvailabilityContainer>
      <ProviderVideoCallAvailability role="note">
        <IconText src={videoIcon} alt="video icon" />
        Atende Online
      </ProviderVideoCallAvailability>
    </ProviderVideoCallAvailabilityContainer>
  )

  const DetailsInfo = () => (
    <>
      <ProviderName>{name}</ProviderName>
      <ProviderSpecialty>{specialty}</ProviderSpecialty>
      <License>
        <p className="title">REGISTRO</p>
        {licenseNumber ? <p className="number">{licenseNumber}</p> : <p className="number">-</p>}
      </License>
      {experience && <ExerienceText size="small">{experience}</ExerienceText>}
      <SectionBlock>
        {state && (
          <SectionTitle>
            <IconText src={addressIcon} alt="address icon" />
            {city && `${city} - `}
            {`${state}`}
          </SectionTitle>
        )}
        <Paragraph size="small">{address}</Paragraph>
      </SectionBlock>
    </>
  )

  const ContactInfo = () => (
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
  )

  const CallPlatform = () => (
    <SectionBlock>
      <SectionTitle>Atendimento online</SectionTitle>
      <p>
        <IconText src={videoIcon} alt="video icon" />
        {videoCallPlatform ? <span>{videoCallPlatform}</span> : <span>Não informado</span>}
      </p>
    </SectionBlock>
  )

  const HealthInsurance = () => (
    <SectionBlock>
      <SectionTitle>Planos de saúde</SectionTitle>
      <p>
        <IconText src={healthInsuranceIcon} alt="card icon" />
        {healthInsurance ? <span>{healthInsurance}</span> : <span>Não informado</span>}
      </p>
    </SectionBlock>
  )

  const MoreInfoBox = () => (
    <>
      {videoCallAvailability && <CallPlatform />}
      <HealthInsurance />
    </>
  )

  return (
    <ProviderCardWrapper className="providerCard" role="listitem">
      <ResponsiveGrid columns={columns} rows={rows} areas={fixedGridAreas}>
        <Box gridArea="header">
          {videoCallAvailability && <ProviderVideoCallAvailabilityLabel />}
          <CategoryBadge category={category} />
        </Box>

        <ResponsiveContext.Consumer>
          {(responsive) =>
            responsive === 'small' ? (
              <Box gridArea="first" className="providerCardColumn">
                <DetailsInfo />
                <ContactInfo />
                <Collapsible open={open} {...props}>
                  <MoreInfoBox />
                </Collapsible>
                <ToggleButton
                  isOpen={open}
                  labelClose="Fechar"
                  labelOpen="Saiba Mais"
                  iconClose={FormUp}
                  iconOpen={FormDown}
                  onClick={() => {
                    setOpen(!open)
                  }}
                />
              </Box>
            ) : (
              <>
                <Box gridArea="first" className="providerCardColumn">
                  <DetailsInfo />
                </Box>
                <Box gridArea="second" className="providerCardColumn">
                  <ContactInfo />
                  <MoreInfoBox />
                </Box>
              </>
            )
          }
        </ResponsiveContext.Consumer>
      </ResponsiveGrid>
    </ProviderCardWrapper>
  )
}

ProviderCard.propTypes = {
  provider: PropTypes.shape({
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
  }).isRequired,
}

export { ProviderCard }
