import React from 'react'
import { Card } from '../Card'
import { IconText } from '../IconText'
import errorImage from '../../assets/images/img_erro.svg'
import { refreshIcon, warningIcon } from '../../assets/icons'
import { Paragraph, Box } from 'grommet'
import { Button } from '../Button'
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
  padding-bottom: 54px;
`

const ErrorImage = styled(Box)`
  position: relative;
  width: 501px;
  height: 234px;
  margin-top: 5%;
  margin-bottom: 15%;
  background: transparent url(${errorImage}) no-repeat padding-box;
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
      <Button onClick={onClick} aria-label="reload">
        <span>
          <RefreshIcon src={refreshIcon} alt="refreshIcon" />
        </span>
        Recarregar página
      </Button>
    </ErrorContainer>
  </Box>
)
