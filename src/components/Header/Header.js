import React, { PureComponent } from "react";
import {Box, Button, Grid, Heading, Text} from "grommet";
import styled from "styled-components";
import logo from '../../assets/img_logo_atendoemlibras.svg';
import headerImage from '../../assets/img_hands.svg';
import { HeaderCallOut } from './HeaderCallOut'

const LogoBox = styled(Box)`
    width: 220px;
    height: 64px;
    background: url(${logo}) 0% 0% no-repeat;
`;

const HeaderImage = styled(Box)`
    width: 448px;
    height: 489px;
    background: url(${headerImage}) no-repeat;
`;

const RegisterText = styled(Text)`
    font-size: 22px;
    align-self: center;
    width: 60%;
    padding-left: 14%;
`;

const RegisterButton = styled(Button)`
    width: 167px;
    height: 55px;
    background: #5996F7;
    border-radius: 17px 17px 17px 0px;
    border: 0px;
    color: white;
    font-size: 19px;
`;

const DescriptionBox = styled(Box)`
    margin-top: 20%;
    width: 80%;
`;

const TextHeading = styled(Heading)`
   font-weight: 100;
   margin-bottom: 3%;
`;

class Header extends PureComponent {
  render = () => {
    return (
      <div className={this.props.className}>
        <Grid
            fill
            rows={["auto", "flex"]}
            columns={["44.33%", "55.66%"]}
        >
          <LogoBox/>
          <Box direction="row" align="start">
            <RegisterText>
              É profissional de saúde ou conhece alguém da área?
            </RegisterText>
            <RegisterButton label="Cadastre Aqui"/>
          </Box>
          <HeaderImage/>
          <DescriptionBox>
            <TextHeading>
              Conheça profissionais de saúde que atendem em Libras
            </TextHeading>
            <Text size="medium">
              Sabemos da dificuldade de encontrar um profissional de saúde que se comunique em Libras e no
              atual momento em que vivemos isso se torna ainda mais difícil. Pensando nisso trouxemos
              alguns profissionais que atendem em Libras.
            </Text>
          </DescriptionBox>
        </Grid>
        <HeaderCallOut />
      </div>
    )
  }
}

const StyledHeader = styled(Header)`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100vh;
  background: #0F1423;
  color: white;
  font-family: Open Sans, sans-serif;
  text-align: left;
`
export { StyledHeader as Header }