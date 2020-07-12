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

const ErrorImage = styled.img`
  object-fit: cover;
  width: 100%;
`

export const ErrorCard = ({ onClick }) => (
  <ResponsiveContext.Consumer>
    {(responsive) => {
      return (
        <Box align="center" role="error">
          <ErrorContainer align="center">
            <ErrorImage src={errorIcon} alt="Computer screen with a warning icon" />
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
