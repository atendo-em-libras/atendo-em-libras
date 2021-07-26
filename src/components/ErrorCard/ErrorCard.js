import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../Card'
import { IconText } from '../IconText'
import { refreshIcon } from '../../assets/icons'
import { Paragraph, Box, ResponsiveContext } from 'grommet'
import { Button } from '../Buttons'
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

export const ErrorCard = ({ onClick, srcImage, textParagraph, textButton }) => {
  const { title, subtitle } = textParagraph
  return (
    <ResponsiveContext.Consumer>
      {(responsive) => {
        return (
          <Box align="center" role="error">
            <ErrorContainer align="center">
              <ErrorImage src={srcImage} />
              <Paragraph size={responsive === 'small' ? 'small' : 'large'}>{title}</Paragraph>
              <Paragraph size={responsive === 'small' ? 'small' : 'large'} margin={{ bottom: 'medium' }}>
                <strong>{subtitle}</strong>
              </Paragraph>
              <Button
                primary
                onClick={onClick}
                aria-label="reload"
                icon={<RefreshIcon src={refreshIcon} alt="refreshIcon" />}
                size="medium"
                label={textButton}
              />
            </ErrorContainer>
          </Box>
        )
      }}
    </ResponsiveContext.Consumer>
  )
}

ErrorCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  srcImage: PropTypes.string.isRequired,
  textParagraph: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }),
  textButton: PropTypes.string,
}

ErrorCard.defaultProps = {
  textParagraph: PropTypes.shape({
    subtitle: '',
  }),
}
