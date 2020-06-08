import styled from 'styled-components'

export const Badge = styled.p`
  margin-right: 1em;
  color: #fff;
  width: max-content;
  max-width: 70%;
  font-size: 1.4em;
  font-weight: 600;
  padding: 0.2em 2em;
  border-radius: 1.5em;
  line-height: 1.8em;
  background-color: ${(props) => (props.color ? props.color : 'lightgrey')};
  align-items: center;
`
