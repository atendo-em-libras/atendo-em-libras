import React, { Component } from 'react'
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
import { Paragraph, Box, ResponsiveContext, Button, Collapsible, Text } from 'grommet'
import { FormDown, FormUp } from 'grommet-icons'
import { videoIcon, phoneIcon, emailIcon, addressIcon, healthInsuranceIcon } from '../../assets/icons'
import { ResponsiveGrid } from '../ResponsiveGrid'
import styled from 'styled-components'

class ProviderCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

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

    const colors = {
      open: {
        font: '#5A8DED',
        background: '#C7DDFD',
      },
      close: {
        font: '#FF7B7B',
        background: '#FFE8E8',
      },
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
    } = this.props.provider

    const renderProviderVideoCallAvailability = () => (
      <ProviderVideoCallAvailabilityContainer>
        <ProviderVideoCallAvailability role="note">
          <IconText src={videoIcon} alt="video icon" />
          Atende Online
        </ProviderVideoCallAvailability>
      </ProviderVideoCallAvailabilityContainer>
    )

    const renderDetailsInfo = () => (
      <>
        <ProviderName>{name}</ProviderName>
        <ProviderSpecialty>{specialty}</ProviderSpecialty>
        <License>
          <p className="title">REGISTRO</p>
          {licenseNumber ? <p className="number">{licenseNumber}</p> : <p className="number">-</p>}
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
      </>
    )

    const renderContactInfo = () => (
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

    const renderCallPlatform = () => (
      <SectionBlock>
        <SectionTitle>Atendimento online</SectionTitle>
        <p>
          <IconText src={videoIcon} alt="video icon" />
          {videoCallPlatform ? <span>{videoCallPlatform}</span> : <span>Não informado</span>}
        </p>
      </SectionBlock>
    )

    const renderHealthInsurance = () => (
      <SectionBlock>
        <SectionTitle>Planos de saúde</SectionTitle>
        <p>
          <IconText src={healthInsuranceIcon} alt="card icon" />
          {healthInsurance ? <span>{healthInsurance}</span> : <span>Não informado</span>}
        </p>
      </SectionBlock>
    )

    const renderMoreInfoBox = () => (
      <>
        {videoCallAvailability && renderCallPlatform()}
        {renderHealthInsurance()}
      </>
    )

    const ToggleButton = ({ isOpen, labelClose, labelOpen, iconClose, iconOpen, className, onClick }) => {
      const Icon = isOpen ? iconClose : iconOpen

      return (
        <H2>
          <Button hoverIndicator="background" className={className} onClick={onClick}>
            <Text size="small">
              {isOpen ? labelClose : labelOpen}
              <Icon color={isOpen ? colors.close.font : colors.open.font} />
            </Text>
          </Button>
        </H2>
      )
    }

    const ToggleButtonStyled = styled(ToggleButton)`
      background-color: ${(props) => (props.isOpen ? colors.close.background : colors.open.background)};
      color: ${(props) => (props.isOpen ? colors.close.font : colors.open.font)};
      width: 100%;
      height: 100%;
      padding: 20px 0 20px 0;

      & svg {
        vertical-align: middle;
      }
    `

    const H2 = styled.h2`
      width: 100%;
      background-color: ${(props) => (props.isOpen ? colors.close.background : colors.open.background)};
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
    `

    return (
      <ProviderCardWrapper className="providerCard" role="provider">
        <ResponsiveGrid columns={columns} rows={rows} areas={fixedGridAreas}>
          <Box gridArea="header">
            {videoCallAvailability && renderProviderVideoCallAvailability()}
            <CategoryBadge category={category} />
          </Box>

          <ResponsiveContext.Consumer>
            {(responsive) =>
              responsive === 'small' ? (
                <Box gridArea="first" className="providerCardColumn">
                  {renderDetailsInfo()}
                  {renderContactInfo()}
                  <Collapsible open={this.state.open} {...this.props}>
                    {renderMoreInfoBox()}
                  </Collapsible>
                  <ToggleButtonStyled
                    isOpen={this.state.open}
                    labelClose="Fechar"
                    labelOpen="Saiba Mais"
                    iconClose={FormUp}
                    iconOpen={FormDown}
                    onClick={() => this.setState({ open: !this.state.open })}
                  />
                </Box>
              ) : (
                <>
                  <Box gridArea="first" className="providerCardColumn">
                    {renderDetailsInfo()}
                  </Box>
                  <Box gridArea="second" className="providerCardColumn">
                    {renderContactInfo()}
                    {renderMoreInfoBox()}
                  </Box>
                </>
              )
            }
          </ResponsiveContext.Consumer>
        </ResponsiveGrid>
      </ProviderCardWrapper>
    )
  }
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
