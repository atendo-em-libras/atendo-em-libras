import styled from 'styled-components/macro'
import { Box } from 'grommet'
import { Card } from '../Card'

const ProviderCardWrapper = styled(Card)`
  @media (max-width: 800px) {
    padding-bottom: 10em;
  }
`

const ProviderSpecialty = styled.p`
  color: #0f1423;
  font-size: 1.4em;
  max-width: 30em;
  line-height: 20px;
  margin-top: 1em;
`

const ProviderVideoCallAvailabilityContainer = styled(Box)`
  width: 100%;
  @media (max-width: 440px) {
    margin-top: 40px;
  }
`

const ProviderVideoCallAvailability = styled.span`
  color: #5996f7;
  background-color: #c7ddfd;
  border-radius: 0px 15px;
  font-size: 1.4em;
  font-weight: 600;
  padding: 0.5em 1em;
  position: absolute;
  right: 0;
  top: 0;
`

const ProviderName = styled.p`
  font-weight: 600;
  color: #0f1423;
  font-size: 1.8em;
`

const SectionBlock = styled.div`
  border-bottom: #f5f5f5 1.5px solid;
  padding-bottom: 2em;
  margin-bottom: 2em;

  font-size: 1.4em;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  @media (max-width: 800px) {
    border-top: rgba(15, 20, 35, 0.2) 1.4px dashed;
    padding-top: 1em;
    margin-top: 2em;

    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`

const SectionTitle = styled.p`
  font-weight: 600;
  color: #0f1423;
`
const License = styled.div`
  margin-bottom: 1.5em;
  margin-top: 1.5em;
  line-height: 20px;

  & .title {
    font-weight: 800;
    color: #5996f7;
    font-size: 1.2em;
  }

  & .number {
    color: #0f1423;
    font-size: 1.4em;
  }
`
const ExerienceText = styled.p`
  font-size: 1.3em;
  line-height: 1.5em;
  color: #0f1423;
  opacity: 0.57;

  @media (min-width: 801px) {
    margin-bottom: 1.5em;
  }
`

export {
  SectionBlock,
  SectionTitle,
  License,
  ExerienceText,
  ProviderName,
  ProviderVideoCallAvailabilityContainer,
  ProviderVideoCallAvailability,
  ProviderSpecialty,
  ProviderCardWrapper,
}
