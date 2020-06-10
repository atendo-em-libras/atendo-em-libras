import styled from 'styled-components'

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 80px;
  margin: 0 auto;
  @media (max-width: 800px) {
    padding: 0 10vw;
  }
`

export { Container }
