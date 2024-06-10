import styled from "styled-components";
import fotoFrancis from "/src/assets/foto-francis.jpg";
import ListSkills from '../Skills';
import breakpoints from "../../Styles/Breakpoint/breakpoint.jsx";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  max-width: 1200px;
  margin: 0 auto;

  @media ${breakpoints.bg} {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }
`;

const SideSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media ${breakpoints.bg} {
    justify-content: center;
    align-items: center;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

  @media ${breakpoints.bg} {
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-family: "Roboto Flex", sans-serif;
  font-size: 80px;
  font-weight: 700;
  color: #292929;
  margin-left: 124px;
  margin-top: 5px;

  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;

const NameSubtitle = styled.h2`
  font-family: 'TTSupermolot-Bold';
  font-size: 36px;
  font-weight: 400;
  color: #292929;
  margin-left: 124px;
  margin-top: 53px;

  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;

const JobSubtitle = styled.h2`
  font-family: 'TTSupermolot-Regular';
  display: flex;
  font-size: 36px;
  font-weight: 400;
  color: #292929;
  margin-left: 120px;
  margin-top: 2px;
  margin-bottom: 83px;
  
  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;

const SectionTitle = styled.h3`
  font-family: 'TTSupermolot-Bold';
  font-size: 36px;
  font-weight: 400;
  color: #292929;
  margin-left: 121px;
  margin-top: 36px;

  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;

const Description = styled.p`
  font-family: "Roboto Flex", sans-serif;
  font-size: 16px;
  letter-spacing: 1.6px;
  font-weight: 300;
  color: #292929;
  width: 360px;
  line-height: 19px;
  margin-left: 121px;

  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 590px;
  height: 819px;
  margin-left: 116px;
  margin-right: 116px;
  padding-top: 15px;

  @media ${breakpoints.bg} {
    width: 100%;
    height: auto;
  }
`;

const Titulo = () => {
  return (
    <Main>
      <SideSection>
        <NameSubtitle>Olá, meu nome é</NameSubtitle>
        <Title>Francis Gobbi</Title>
        <JobSubtitle>Sou Analista de Teste - QA</JobSubtitle>
        <SectionTitle>Sobre mim</SectionTitle>
        <Description>Olá, meu nome é Francis Gobbi, tenho 40 anos. Moro em Porto Alegre/RS sou formado em Engenharia de Computação - PUCRS e estou cursando Pós-Graduação em Automação de Testes de Software, em Porto Alegre. Entrei na DB em novembro de 2021 como analista de testes.
        Trabalho com Testes Automatizados aproximadamente 3 anos.</Description>
      </SideSection>
      <MainSection>
        <Image src={fotoFrancis} />
        <ListSkills />
      </MainSection>
    </Main>
  );
}

export default Titulo;
