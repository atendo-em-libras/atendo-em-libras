import React, { useContext } from 'react'
import { AboutBanner } from './AboutBanner/AboutBanner'
import styled from 'styled-components/macro'
import { Box, ResponsiveContext, Avatar } from 'grommet'
import FotoBeatriz from '../../assets/images/idealizadoras/beatriz.png'
import FotoManuella from '../../assets/images/idealizadoras/manuella.png'
import { Paragraph } from '../../components/Typography/Paragraph'
import { Heading } from '../../components/Typography/Heading'
import FotoAndressa from '../../assets/images/participantes/andressa.jpg'
import FotoCris from '../../assets/images/participantes/cris.png'
import FotoFelipe from '../../assets/images/participantes/felipe.png'
import FotoGuilherme from '../../assets/images/participantes/guilherme.png'
import FotoHeitor from '../../assets/images/participantes/heitor.png'
import FotoInessa from '../../assets/images/participantes/inessa.png'
import FotoLaura from '../../assets/images/participantes/laura.png'
import FotoLuana from '../../assets/images/participantes/luana.png'
import FotoLuma from '../../assets/images/participantes/luma.png'
import FotoMaira from '../../assets/images/participantes/maira.png'
import FotoMarco from '../../assets/images/participantes/marco.png'
import FotoMarcos from '../../assets/images/participantes/marcos.png'
import FotoNicole from '../../assets/images/participantes/nicole.png'
import FotoRicardo from '../../assets/images/participantes/ricardo.png'
import FotoSophia from '../../assets/images/participantes/sophia.png'
import FotoThomaz from '../../assets/images/participantes/thomaz.png'

const AboutWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: #0f1423;
  color: white;
  font-family: Open Sans, sans-serif;
  text-align: left;
`

const SectionStyled = styled.section`
  p {
    padding-bottom: 2em;
  }
`
const Video = styled.video`
  width: 100%;
  height: 300px;
  border-radius: 14px;
  @media (min-width: 800px) {
    width: 476px;
    height: 338px;
  }
`

const TitleAndParagraphWrapper = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-flow: column;
  }
`

const DropletAvatar = styled(Avatar)`
  border-top-right-radius: 0;
`

const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & div {
    width: 120px;
  }
`

const idealizadoras = [
  {
    nome: 'Beatriz Lonskis',
    role: 'Designer e idealizadora do projeto',
    avatar: FotoBeatriz,
    paragraph:
      'lorem ipsim lorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsim',
  },
  {
    nome: 'Manuella Torreão',
    role: 'Desenvolvedora e idealizadora do projeto',
    avatar: FotoManuella,
    paragraph:
      'lorem ipsim lorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsimlorem ipsim',
  },
]

const participants = [
  { nome: 'Andressa Silva', role: 'Desenvolvedora', avatar: FotoAndressa },
  { nome: 'Cris Brand', role: 'Business Analyst', avatar: FotoCris },
  { nome: 'Felipe Fahrion', role: 'Desenvovledor', avatar: FotoFelipe },
  { nome: 'Heitor Inhaquites', role: 'Desenvovledor', avatar: FotoHeitor },
  { nome: 'Guilherme Vandresen', role: 'Business Analyst', avatar: FotoGuilherme },
  { nome: 'Inessa Luerce', role: 'Desenvolvedora e Experience Designer', avatar: FotoInessa },
  { nome: 'Laura Melo', role: 'Business Analyst', avatar: FotoLaura },
  { nome: 'Luana Gayer', role: 'Business Analyst', avatar: FotoLuana },
  { nome: 'Luma Beserra', role: 'Desenvolvedora', avatar: FotoLuma },
  { nome: 'Maira Cerqueira', role: 'QA Analyst', avatar: FotoMaira },
  { nome: 'Marco Beduschi', role: 'Desenvolvedor', avatar: FotoMarco },
  { nome: 'Marcos Bezerra', role: 'Desenvolvedor', avatar: FotoMarcos },
  { nome: 'Nicole Bianchin', role: 'Desenvolvedora', avatar: FotoNicole },
  { nome: 'Ricardo Praxedes', role: 'Desenvolvedor', avatar: FotoRicardo },
  { nome: 'Sophia Cavalcan', role: 'Experience Designer', avatar: FotoSophia },
  { nome: 'Thomaz Zandonotto', role: 'Desenvolvedor', avatar: FotoThomaz },
]

const About = () => {
  const screenSize = useContext(ResponsiveContext)
  const contentDirection = screenSize === 'small' ? 'column' : 'row'

  return (
    <>
      <AboutWrapper>
        <AboutBanner />
      </AboutWrapper>

      <SectionStyled>
        <Box direction={contentDirection} pad="xlarge">
          <TitleAndParagraphWrapper>
            <Heading level="2">O Atendo em Libras</Heading>
            <Paragraph>
              O Atendo em Libras é uma plataforma de cadastro e consulta de profissionais que sabem Libras, com a
              finalidade de disponibilizar à comunidade surda acesso aos serviços sem a necessidade de intérprete.
              Assim, as pessoas surdas podem cuidar de sua saúde com autonomia.
            </Paragraph>
          </TitleAndParagraphWrapper>
          <Video controls>Your browser does not support the Video tag.</Video>
        </Box>
      </SectionStyled>

      <SectionStyled>
        <Box direction={contentDirection} pad="xlarge">
          <TitleAndParagraphWrapper>
            <Heading level="2">Nosso propósito</Heading>
            <Paragraph>
              Dar visibilidade aos profissionais que disponibilizam serviços de atendimento em Libras, trazendo
              acessibilidade à comunidade surda e, também, conceder a autonomia às pessoas surdas nos cuidados de saúde.
            </Paragraph>
          </TitleAndParagraphWrapper>
          <Video controls>Your browser does not support the Video tag.</Video>
        </Box>
      </SectionStyled>

      <SectionStyled>
        <Box align="center">
          <Heading level="2">As idealizadoras</Heading>
          <Box direction={contentDirection} pad="xlarge">
            {idealizadoras.map((idealizadora) => (
              <Box align="center">
                <DropletAvatar size="xlarge" src={idealizadora.avatar} round="large" />
                <Heading level="2">{idealizadora.nome}</Heading>
                <Heading level="2">{idealizadora.role}</Heading>
                <Paragraph textAlign="center">{idealizadora.paragraph}</Paragraph>
              </Box>
            ))}
          </Box>
        </Box>
      </SectionStyled>

      <SectionStyled>
        <Box align="center">
          <Heading level="2">Conheça quem faz parte</Heading>
          <BoxStyled justify="center" pad="large">
            {participants.map((participant) => (
              <Box align="center" margin="small">
                <DropletAvatar size="xlarge" src={participant.avatar} round="large" />
                <Heading level="3" textAlign="center">
                  {participant.nome}
                </Heading>
                <Heading level="4" textAlign="center">
                  {participant.role}
                </Heading>
              </Box>
            ))}
          </BoxStyled>
        </Box>
      </SectionStyled>
    </>
  )
}

export { About }
