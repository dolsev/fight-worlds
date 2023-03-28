import React from 'react';
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  height: 100vh;
  color: white;
  scroll-snap-align: center;
  flex-direction: column;
  align-items: center;
  background: rgb(17, 17, 17);
  background: linear-gradient(175deg, rgba(23, 107, 95, 0.96) 14%, rgb(0, 96, 96) 41%, rgb(17, 49, 49) 71%, rgba(13, 38, 34, 0.96));

`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const H1 = styled.h1`
  color: #ffffff;
  font-weight: 900;
  letter-spacing: 2px;
`;

const List = styled.ul`
  margin-top: 2rem;
  padding: 0;
  width: 100%;
  max-width: 1400px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  gap:10px;
  @media  screen and (max-width: 400px){
    gap:5px;
    margin-top: 1rem;
  }
`;

const ListItem = styled.li`
  list-style: none;
  border-radius: 4px;
  font-weight: bold;
  padding: 5px;
  border: 1px white solid;
  background-color: rgba(250, 248, 248, 0.04);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:786px){
    padding: 1px;
  }
  @media screen and (max-width:400px){
    font-size: 0.8rem;
  }

  :hover {
    background-color: #30fcec;
    color: black;
  }
  @media screen and (max-width: 400px){
    padding: 1px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2rem 0 1rem 0;
  color: #30fcec;
  @media screen and (max-width: 400px){
    font-size: 1.3rem;
    margin: 0 0 1rem;
  }
`;

const WhatWeDid = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  color: #ffffff;
  gap: 40px;
  @media screen and (max-width: 1400px){
    gap: 20px;
  }
  @media screen and (max-width: 1130px){
    gap: 5px;
  }
  @media screen and (max-width: 400px){
    grid-template-columns: repeat(1, 1fr);

  }
`;

const CurrentWork = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: auto-fill(auto-fill, 1fr);
  gap: 10px;
  align-items: start;
`;

function Hero() {
    const scrollDown = () => {
        const teamSection = document.querySelector('#team');
        teamSection.scrollIntoView({ behavior: 'smooth' });
    };

    const currentWork = [
        'R&D',
        'Prototypes',
        'Styles',
        'Fakeshot',
        'Texturing R&D',
        'Animations',
        'UI structures',
        'Models',
        'Integrate animations',
        'Build mechanics',
        'More props & models',
        'Firing sector concept',
        'Sound FX design',
        'GUI style',
        'Environment',
        'Anomaly resolution',
    ];

    const whatWeDid = [
        'UE5 scene composition',
        'GUI integration',
        'Niagara demo disintegration FX',
        'Combat prototype',
    ];

    return (
        <Section id='roadmap'>
            <Wrapper>
                <H1>Roadmap:</H1>
                <List>
                    <SectionTitle>Ready</SectionTitle>
                    <SectionTitle>In Progress</SectionTitle>
                    <WhatWeDid>
                        {currentWork.map((item, index) => (
                            <ListItem key={index}>{item}</ListItem>
                        ))}
                    </WhatWeDid>
                    <CurrentWork>
                        {whatWeDid.map((item, index) => (
                            <ListItem key={index}>{item}</ListItem>
                        ))}
                    </CurrentWork>
                </List>
            </Wrapper>
        </Section>
    );
}

export default Hero;
