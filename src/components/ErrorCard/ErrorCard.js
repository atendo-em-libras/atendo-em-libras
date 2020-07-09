import React from 'react'
import { Card } from '../Card'
import { IconText } from '../IconText'
import { errorIcon } from '../../assets/icons'
import { refreshIcon } from '../../assets/icons'
import { Paragraph, Box, ResponsiveContext } from 'grommet'
import { PrimaryButton } from '../Buttons'
import styled from 'styled-components/macro'

const RefreshIcon = styled(IconText)`
  margin-right: 8px;
`

const ErrorContainer = styled(Card)`
  width: 607px;
  text-align: center;
  vertical-align: center;
  padding-bottom: 54px;
`

const ErrorImage = styled(Box)`
  position: relative;
  width: 100%;
  height: 320px;
  margin-top: 5%;
  background: transparent url(${errorIcon}) no-repeat padding-box;
  background-size: contain;
  background-position: center;

  @media (max-width: 800px) {
    height: 165px;
  }
`

export const ErrorCard = ({ onClick }) => (
  <ResponsiveContext.Consumer>
    {(responsive) => {
      return (
        <Box align="center" role="error">
          <ErrorContainer align="center">
            <ErrorImage aling="center" margin={{ bottom: 'medium' }} />
            <Paragraph size={responsive === 'small' ? 'small' : 'large'}>
              Ops, tivemos um problema e infelizmente não conseguimos carregar a lista.
            </Paragraph>
            <Paragraph size={responsive === 'small' ? 'small' : 'large'} margin={{ bottom: 'medium' }}>
              <strong>Tente novamente.</strong>
            </Paragraph>
            <PrimaryButton
              onClick={onClick}
              aria-label="reload"
              icon={<RefreshIcon src={refreshIcon} alt="refreshIcon" />}
              label="Recarregar página"
              size={responsive === 'small' ? 'small' : 'medium'}
            />
          </ErrorContainer>
        </Box>
      )
    }}
  </ResponsiveContext.Consumer>
)
