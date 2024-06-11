import React from 'react';
import styled from 'styled-components';

import automacaoMobileImg from '../Projetos/Imagens/automation-mobile.png';
import automacaoApiImg from '../Projetos/Imagens/automation-api.png';
import automacaoDesktopImg from '../Projetos/Imagens/automacao-desktop.png';

import breakpoints from '../../Styles/Breakpoint/breakpoint';

const ProjetosContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;

  @media ${breakpoints.bg} {
    margin-left: 0;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 306px;
  flex: 0 1 calc(33.33% - 20px);
  max-width: 306px;
  background-color: #f5f5f5ff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media ${breakpoints.bg} {
    flex: 0 1 100%;
    min-width: 280px;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 183px;
  background-color: #d9d9d9ff;
  background-position: center;
  background-size: cover;
  border-radius: 8px 8px 0 0;
`;

const CardTitle = styled.h3`
  font-family: 'TTSupermolot-Bold';
  font-size: 32px;
  color: #292929ff;
  margin: 10px 0;
`;

const CardSubtitle = styled.p`
  font-family: 'TTSupermolot-Bold';
  font-size: 14px;
  color: #ed177dff;
  margin: 10px 0;
`;

const CardContent = styled.p`
  font-family: 'Roboto Flex';
  font-weight: 300;
  font-size: 16px;
  color: #292929ff;
  line-height: 1.5;
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  margin-top: auto;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #201f53ff;
  color: #ffffff;
  font-family: 'TTSupermolot-Bold';
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #1d1b4fff;
  }
`;

const Projetos = () => {
    return (
        <ProjetosContainer>           
            <h1 >Meus Projetos</h1>            
            <h2>Projetos</h2>
            <Cards>
                <Card>
                    <CardImage style={{ backgroundImage: `url(${automacaoMobileImg})` }} />
                    <CardTitle>Automação Mobile</CardTitle>
                    <CardSubtitle>JAVASCRIPT, WEBDRIVEIO, WDIO </CardSubtitle>
                    <CardContent>Um projeto com JavaScript realizado durante estudo de Pos-Graduação.</CardContent>
                    <ButtonContainer>
                        <a href="https://github.com/francisgobbi/automacao-mobile" target="_blank" rel="noopener noreferrer">
                            <Button>Acessar</Button>
                        </a>
                    </ButtonContainer>
                </Card>
                <Card>
                    <CardImage style={{ backgroundImage: `url(${automacaoApiImg})` }} />
                    <CardTitle>Automação API</CardTitle>
                    <CardSubtitle>JAVASCRIPT, JESTJS</CardSubtitle>
                    <CardContent>Projeto com backend e Front-end do curso de Pos-Graduação, o objetivo foi criar testes exploratorios para garantir a funcionalidades CRUD da API.</CardContent>
                    <ButtonContainer>
                        <a href="https://github.com/francisgobbi/projeto-automacao-de-testes-api" target="_blank" rel="noopener noreferrer">
                            <Button>Acessar</Button>
                        </a>
                    </ButtonContainer>
                </Card>
                <Card>
                    <CardImage style={{ backgroundImage: `url(${automacaoDesktopImg})` }} />
                    <CardTitle>Automação Desktop com Robot Framework e Sikuli</CardTitle>
                    <CardSubtitle>ROBOT FRAMEWORK, SIKULI, PYTHON</CardSubtitle>
                    <CardContent>Proejto sobre Automação Desktop com Robot e Sikuli</CardContent>
                    <ButtonContainer>
                        <a href="https://github.com/francisgobbi/automacao-desktop-robot-sikuli-bugbakery" target="_blank" rel="noopener noreferrer">
                            <Button>Acessar</Button>
                        </a>
                    </ButtonContainer>
                </Card>
              
            </Cards>
        </ProjetosContainer>
    );
}

export default Projetos;