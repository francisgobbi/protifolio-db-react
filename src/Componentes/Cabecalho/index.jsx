import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/src/assets/logo-db.svg';
import GithubIcon from '/src/assets/Icones/icone-github.svg';
import LinkedinIcon from '/src/assets/Icones/icone-linkedin.svg';
import curriculoPDF from '/src/assets/Curriculo_Francis_Gobbi.pdf'
import breakpoints from '../../Styles/Breakpoint/breakpoint';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Navbar = styled.div`
  width: 100%;
  background: #bee7f9;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;

  @media ${breakpoints.md} {
    flex-direction: column;
    align-items: center;
  }
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;

  @media ${breakpoints.md} {
    margin-bottom: 10px;
  }
`;

const LogoImage = styled.img`
  width: 87px;
  height: 60px;
  margin-right: 32px;

  @media ${breakpoints.md} {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const NavButton = styled(Link)`
  background: none;
  border: none;
  font-family: 'TTSupermolot-Bold';
  font-size: 18px;
  letter-spacing: 0.36px;
  color: #201f53;
  margin: 0 16px;
  cursor: pointer;
  text-decoration: none;

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #201f53;
  }

  @media ${breakpoints.md} {
    margin: 0 8px;
  }
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;

  @media ${breakpoints.md} {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;

const IconButton = styled.a`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 8px;

  @media ${breakpoints.md} {
    margin: 8px 0;
  }
`;

const Cabecalho = () => {
  return (
    <>
      <Container>
        <Navbar>
          <NavGroup>
            <a href="https://db.tec.br/" target="_blank" rel="noopener noreferrer">
              <LogoImage src={logo} />
            </a>
            <NavButton to="/">Sobre</NavButton>
            <NavButton to={curriculoPDF} target="_blank" rel="noopener noreferrer">Currículo</NavButton>
            <NavButton to="/projetos">Projetos</NavButton>
          </NavGroup>
          <IconGroup>
            <IconButton href="https://github.com/francisgobbi" target="_blank" rel="noopener noreferrer">
              <img src={GithubIcon} alt="Github" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/francis-gobbi-a5019b54" target="_blank" rel="noopener noreferrer">
              <img src={LinkedinIcon} alt="Linkedin"/>
            </IconButton>
          </IconGroup>
        </Navbar>
      </Container>
    </>
  );
}

export default Cabecalho;