import React from 'react';
import styled from "styled-components";
const Section = styled.div`
  display: flex;
  height: 100vh;
  background-image: url("/img/team-bg.png");
  background-size: cover;
  color: white;
  scroll-snap-align: center;
  flex-direction: column;
  align-items:center;

`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1500px;
    margin:5% 10% 5% 5%;
    gap:10px;
  
  @media screen and (max-width: 1500px) {
    width: 768px;
    justify-content: center;
    margin:0 0 0 5%;
  }
`
const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  gap:35px;
  margin-bottom:10%;
  justify-content: center;
  animation: slideIn 0.5s ease-in-out;
  align-items: center;
  @keyframes slideIn{
    from {
      opacity: 0;
      transform: translateX(50%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 1500px) {
    width: 768px;
    gap:20px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    gap:10px;
    margin:10% 10%;

  }
`
const Portfolio = styled.div`
    display: flex;
    gap:10px;
    backdrop-filter: blur(3px);
    background-color: rgba(54, 45, 45, 0.1);
    @media screen and (max-width: 768px) {
  width: 400px;
}
  @media screen and (max-width: 576px) {
    width: 365px;

  }
`
const Photo = styled.img`
  object-fit: cover;
  height: 150px;
  width: 150px;
  @media screen and (max-width: 768px) {
    height: 80px;
    width: 150px;

  }
`;

const H1 = styled.h1`
  color: #CC844D;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
  @media screen and (max-width: 576px) {
    font-size: 0.8em;
  }
`;
const H2 = styled.h2`
color: #30fcec;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
  @media screen and (max-width: 576px) {
    font-size: 0.8em;
  }
`;
const H3 = styled.h3`
  color: #CC844D;
  @media screen and (max-width: 768px) {
    font-size: 0.9em;
  }
  @media screen and (max-width: 576px) {
    font-size: 0.7em;
  }

`
const P = styled.p`
  color:white;
  @media screen and (max-width: 768px) {
    font-size: 0.8em;
  }
  @media screen and (max-width: 576px) {
    font-size: 0.6em;
  }
  

`
const Description = styled.div`
  display: flex;
  flex-direction:column;
  gap:10px;

`


function Team() {
    return (
        <Section id='team'>
            <Wrapper>
                <H1>Our Team:</H1>
                <About>
                    <Portfolio>
                    <Photo src='./img/SM-photo.jpg'/>
                    <Description>
                    <H2>Sergey Matulkov</H2>
                        <H3>CEO</H3>
                        <P>
                            Working in development since early 2000s.
                            Since 2008 he has been working in the position
                            CTO and Delivery Manager at Apalon.
                            Full cycle of development master,
                            improves the quality of products from verification
                            hypothesis. Also has skills in modeling, design,
                            and drawing.
                        </P>
                    </Description>
                    </Portfolio>
                    <Portfolio>
                        <Photo src='https://images.unsplash.com/photo-1558565701-31805fdd5c64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'/>
                        <Description>
                            <H2>Ivan Kivlev</H2>
                            <H3>Director</H3>
                            <P>
                                Working in development since 2012.
                                Since 2016 he has been working in the position
                                of Game Director at Box Squad Games.
                                In addition to his skills in game development, he is also highly skilled in
                                team management and leadership, ensuring that all members of the development team are working together
                                seamlessly to create the best possible gaming experience for players.
                            </P>
                        </Description>
                    </Portfolio>
                    <Portfolio>
                        <Photo src='https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                        <Description>
                            <H2>Vadim Eliseev</H2>
                            <H3>Game Developer</H3>
                            <P>
                                Working in development since early 2019.
                                Outsource developer for huge MMORTS projects.
                                Agile and ready to implement fresh ideas.
                            </P>
                        </Description>
                    </Portfolio>
                </About>
            </Wrapper>
        </Section>
    );
}

export default Team;