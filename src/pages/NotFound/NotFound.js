import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const NotFoundBanner = styled.div`
  width: 100%;
  height: 200px;
  padding: 2em 0;
  background-color: #0f1423;
  color: white;
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    min-height: 40vh;
    max-height: 500px;
  }

  h1 {
    font-size: 2em;
    font-weight: 400;
    line-height: 1.2em;
    text-align: left;
    @media (min-width: 800px) {
      margin-top: 0;
      font-size: 3.2em;
      line-height: 1.5em;
    }
  }
`

const ErroSectionStyled = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 4em;
  @media (max-width: 800px) {
    padding: 2em;
    flex-flow: column;
  }
`

class NotFound extends React.Component {
  render() {
    return (
      <>
        <NotFoundBanner>
          <h1>Ops, página não encontrada!</h1>
        </NotFoundBanner>
        <ErroSectionStyled>
          <Link to={`/`}>Página inicial</Link>
        </ErroSectionStyled>
      </>
    )
  }
}

export { NotFound }
