import styled from 'styled-components/macro'

const Button = styled.button`
  padding: 20px;
  background-color: #5996f7;
  border-radius: 17px;
  border: 0;
  color: white;
  font-size: 1.4em;
  font-weight: 600;
  cursor: pointer;
  width: max-content;
  margin-top: 38px;

  &:hover {
    background-color: #96bfff;
  }

  &:focus {
    outline: none;
    outline-offset: 0;
  }
`

export { Button }
