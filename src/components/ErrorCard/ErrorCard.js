import React from 'react'
import { Card, IconText } from '../ProviderCard/ProviderCardStyles'
import errorImage from '../../assets/images/img_erro.svg'
import { refreshIcon, warningIcon } from '../../assets/icons'
import { Paragraph, Box } from 'grommet'
import styled from 'styled-components'

const RefreshIcon = styled(IconText)`
  margin-right: 8px;
`

const WarningIcon = styled.img`
  position: absolute;
  left: 45%;
  top: 45%;
`

const ErrorContainer = styled(Card)`
  width: 607px;
  height: 589px;
  text-align: center;
  vertical-align: center;
`

const ErrorImage = styled(Box)`
  position: relative;
  width: 501px;
  height: 234px;
  margin-top: 5%;
  margin-bottom: 15%;
  background: transparent url(${errorImage}) no-repeat padding-box;
`

const RefreshButton = styled.button`
  width: 209px;
  height: 55px;
  background: #5996f7 padding-box;
  border: none;
  border-radius: 17px;
  color: white;
  font-weight: 600;
  font-size: 1.4em;
  margin-top: 10%;
  cursor: pointer;

  &:hover {
    background-color: #96bfff;
  }

  &:focus {
    outline: none;
    outline-offset: 0;
  }
`

export const ErrorCard = ({ onClick }) => (
  <Box align="center" role="error">
    <ErrorContainer align="center">
      <ErrorImage aling="center">
        <WarningIcon src={warningIcon} alt="warningIcon" />
      </ErrorImage>
      <Paragraph size="large">Ops, tivemos um problema e infelizmente não conseguimos carregar a lista.</Paragraph>
      <Paragraph size="large">
        <strong>Tente novamente.</strong>
      </Paragraph>
      <RefreshButton onClick={onClick} aria-label="reload">
        <span>
          <RefreshIcon src={refreshIcon} alt="refreshIcon" />
        </span>
        Recarregar página
      </RefreshButton>
    </ErrorContainer>
  </Box>
)
