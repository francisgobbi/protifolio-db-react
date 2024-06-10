import React from 'react';
import styled from 'styled-components';
import breakpoints from "../../Styles/Breakpoint/breakpoint.jsx";

const Container = styled.div`
  padding: 0 100px;
  width: 300px;
  margin-top: 45px;
  margin-right: 116px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoints.bg} {
    width: 100%;
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  font-family: 'TTSupermolot-Bold';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #292929;
  margin-top: 16px;
  text-align: center;
`;

const SkillList = styled.ul`
  list-style: circle;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;

  @media ${breakpoints.bg} {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

const SkillName = styled.span`
  width: 100px;
  font-family: "Roboto Flex", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  text-align: left;

  @media ${breakpoints.bg} {
    text-align: center;
  }
`;

const CirclesContainer = styled.div`
  display: flex;

  @media ${breakpoints.bg} {
    justify-content: center;
    margin-bottom: 23px;
  }
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  margin-left: 5px;
  border-radius: 50%;
  background: ${({ filled }) => (filled ? '#EAB53D' : 'transparent')};
  border: 2px solid #EAB53D;

  @media ${breakpoints.bg} {
    margin-left: 2px;
  }
`;

const skills = [
  { name: 'HTML', level: 5 },
  { name: 'CSS', level: 5 },
  { name: 'JAVA SCRIPT', level: 4 },
  { name: 'JAVA', level: 4 },
  { name: '', level: 4 },
  { name: '', level: 4 },
  { name: 'SQL', level: 4 },
];

const ListSkills = () => {
  return (
    <Container>
      <Title>Habilidades</Title>
      <SkillList>
        {skills.map((skill) => (
          <SkillItem key={skill.name}>
            <SkillName>{skill.name}</SkillName>
            <CirclesContainer>
              {[...Array(5)].map((_, i) => (
                <Circle key={i} filled={i < skill.level} />
              ))}
            </CirclesContainer>
          </SkillItem>
        ))}
      </SkillList>
    </Container>
  );
};

export default ListSkills;