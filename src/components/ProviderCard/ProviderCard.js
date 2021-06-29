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
    registerNumber,
    attendance,
    phone,
    email,
    biography,
    healthInsurance,
  } = props.provider

  const { onlineAttendance, hospitalClinicAttendance, householdAttendance } = attendance ?? false
  const ProviderVideoCallAvailabilityLabel = () => (
    <ProviderVideoCallAvailabilityContainer>
      <ProviderVideoCallAvailability role="note">
        <IconText src={videoIcon} alt="video icon" />
        Atende Online
      </ProviderVideoCallAvailability>
    </ProviderVideoCallAvailabilityContainer>
  )

  const Attendance = () => (
    <>
      {hospitalClinicAttendance?.stateInitials && (
        <SectionBlock>
          <SectionTitle>
            <IconText src={addressIcon} alt="address icon" />
            {hospitalClinicAttendance.city && `${hospitalClinicAttendance.city} - `}
            {hospitalClinicAttendance.stateInitials && ` ${hospitalClinicAttendance.stateInitials}`}
          </SectionTitle>

          <Paragraph size="small">
            {hospitalClinicAttendance?.streetName}
            {hospitalClinicAttendance?.streetNumber && `, n° ${hospitalClinicAttendance.streetNumber}`}
          </Paragraph>
        </SectionBlock>
      )}

      {householdAttendance?.stateInitials && !hospitalClinicAttendance?.stateInitials && (
        <SectionBlock>
          <SectionTitle>
            <IconText src={addressIcon} alt="address icon" />
            {householdAttendance.city && `${householdAttendance.city} - `}
            {householdAttendance.stateInitials && ` ${householdAttendance.stateInitials}`}
          </SectionTitle>
        </SectionBlock>
      )}
    </>
  )

  const DetailsInfo = () => (
    <>
      <ProviderName>{name}</ProviderName>
      <ProviderSpecialty>{specialty}</ProviderSpecialty>
      <License>
        <p className="title">REGISTRO</p>
        {registerNumber ? <p className="number">{registerNumber}</p> : <p className="number">-</p>}
      </License>
      {biography && <ExerienceText size="small">{biography}</ExerienceText>}{' '}
    </>
  )

  const ContactInfo = () => (
    <SectionBlock>
      <SectionTitle>Contato</SectionTitle>
      <p>
        <IconText src={phoneIcon} alt="phone icon" />
        <a test-data-id="link-api-whatsapp" href={BuildUrlWhatsApp(phone)} target="_blank" rel="noopener noreferrer">
          {phone}
        </a>
      </p>
      <Paragraph size="small">
        <IconText src={emailIcon} alt="e-mail icon" />
        <span> {email}</span>
      </Paragraph>
    </SectionBlock>
  )

  const BuildUrlWhatsApp = (phoneNumber) => {
    const whatsAppNumber = phoneNumber.replace(/(\(|\)|\s|-)/g, '')
    const url = `https://api.whatsapp.com/send/?phone=55${whatsAppNumber}&text&app_absent=0`
    return url
  }

  const CallPlatform = () => (
    <SectionBlock>
      <SectionTitle>Atendimento online</SectionTitle>
      <p>
        <IconText src={videoIcon} alt="video icon" />
        {onlineAttendance.platforms ? <span>{onlineAttendance.platforms}</span> : <span>Não informado</span>}
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
      {onlineAttendance && <CallPlatform />}
      <HealthInsurance />
    </>
  )

  return (
    <ProviderCardWrapper className="providerCard" role="listitem">
      <ResponsiveGrid columns={columns} rows={rows} areas={fixedGridAreas}>
        <Box gridArea="header">
          {onlineAttendance && <ProviderVideoCallAvailabilityLabel />}
          <CategoryBadge category={category} />
        </Box>

        <ResponsiveContext.Consumer>
          {(responsive) =>
            responsive === 'small' ? (
              <Box gridArea="first" className="providerCardColumn">
                <DetailsInfo />
                <Attendance />
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
                  <Attendance />
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
    registerNumber: PropTypes.string.isRequired,
    attendance: PropTypes.shape({
      onlineAttendance: PropTypes.shape({
        whatsAppNumber: PropTypes.string,
        platforms: PropTypes.string,
      }),
      hospitalClinicAttendance: PropTypes.shape({
        city: PropTypes.string,
        state: PropTypes.string,
        streetName: PropTypes.string,
      }),
    }),
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    biography: PropTypes.string,
    healthInsurance: PropTypes.string,
  }).isRequired,
}

export { ProviderCard }
