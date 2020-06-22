import styled from 'styled-components/macro'

const Button = styled.button`
  font-size: 1.4em;
  font-weight: 600;
  cursor: pointer;
`

const PrimaryButton = styled(Button)`
  padding: 20px;
  background-color: #5996f7;
  border-radius: 17px;
  border: 0;
  color: white;
  width: max-content;

  &:hover {
    background-color: #96bfff;
  }

  &:focus {
    outline: none;
    outline-offset: 0;
  }
`

const IconButton = styled(Button)`
  border: none;
  background-color: transparent;
  color: #5996f7;
`

export { PrimaryButton, IconButton }
