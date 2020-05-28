import React from "react";
import {Box, Button, Grid, Header, Heading, Text} from "grommet";
import styled from "styled-components";
import logo from '../../assets/img_logo_atendoemlibras.svg';
import headerImage from '../../assets/img_hands.svg';

const DefaultHeader = styled(Header)`
    width: 100%;
    height: 687px;
    background: #0F1423;
    color: white;
    font-family: Open Sans, sans-serif;
    text-align: left;
`;

const LogoBox = styled(Box)`
    width: 162px;
    height: 64px;
    background-image: url(${logo});
`;

const HeaderImage = styled(Box)`
    width: 448px;
    height: 489px;
    background-image: url(${headerImage});
`;

const  RegisterText = styled(Text)`
    font-size: 22px;
`;

class AppHeader extends React.PureComponent {
    render() {
        return (
            <DefaultHeader align="start">
                <Grid
                    rows={["auto", "flex"]}
                    columns={{
                        count: 2,
                        size: "auto"
                    }}
                >
                    <LogoBox/>
                    <Box align="right">
                        <RegisterText>
                            É profissional de saúde ou conhece alguém da área?
                        </RegisterText>
                        <Button/>
                    </Box>
                    <HeaderImage/>
                    <Box>
                        <Heading>
                            Conheça profissionais de saúde que atendem em Libras
                        </Heading>
                        <Text size="medium">
                            Sabemos da dificuldade de encontrar um profissional de saúde que se comunique em Libras e no
                            atual momento em que vivemos isso se torna ainda mais difícil. Pensando nisso trouxemos
                            alguns profissionais que atendem em Libras.
                        </Text>
                    </Box>

                </Grid>
            </DefaultHeader>
        )
    }
}

export default AppHeader
