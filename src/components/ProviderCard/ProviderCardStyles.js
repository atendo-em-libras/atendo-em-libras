import styled from 'styled-components'
import { Box } from 'grommet'

const Card = styled(Box)`
  font-size: 10px;
  margin: 50px;
  width: 80%;
  border-radius: 15px;
  box-shadow: 0px 10px 32px #0000001a;
  display: flex;
  position: relative;
  overflow: hidden;
  padding: 2em;
  line-height: 3em;
  word-break: break-word;

  & .providerCardColumn:last-child {
    border-right: none;
    margin-right: none;
  }

  @media (min-width: 700px) {
    & .providerCardColumn {
      border-right: #f5f5f5 1.5px dashed;
      padding-right: 3em;
    }

    & .providerCardColumn:last-child {
      padding-left: 3em;
    }
  }
`
const ProviderSpecialty = styled.p`
  color: #0f1423;
  font-size: 1.4em;
  max-width: 30em;
  line-height: 20px;
  margin-top: 1em;
`

const ProviderVideoCallAvailability = styled.span`
  color: #5996f7;
  background-color: #c7ddfd;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0px 15px;
  font-size: 1.4em;
  font-weight: 600;
  padding: 0.5em 1em;
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

  @media (max-width: 700px) {
    &:first-child {
      border-top: #f5f5f5 1.5px solid;
      padding-top: 2em;
      margin-top: 2em;
    }
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
const IconText = styled.img`
  vertical-align: middle;
  margin-right: 5px;
`
const ExerienceText = styled.p`
  font-size: 1.3em;
  line-height: 1.5em;
  color: #0f1423;
  opacity: 0.57;
  margin-bottom: 1.5em;
  text-align: justify;
`

export {
  Card,
  SectionBlock,
  SectionTitle,
  License,
  IconText,
  ExerienceText,
  ProviderName,
  ProviderVideoCallAvailability,
  ProviderSpecialty,
}
