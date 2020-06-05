import styled from 'styled-components'

export const SectionBlock = styled.div`
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
