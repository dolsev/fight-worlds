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
    width: 1500px;
    margin:5% 0 5% 5%;
  
  @media screen and (max-width: 1500px) {
    width: 768px;
    justify-content: center;
  }
`
const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  gap:35px;
  margin-bottom:10%;
  margin-left: 5%;
  animation: slideIn 0.5s ease-in-out;
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
    margin-left: 0;
    gap:20px;


  }

  @media screen and (max-width: 768px) {
    width: 355px;
    gap:10px;

  }
`
const Portfolio = styled.div`
    display: flex;
    gap:10px;
    backdrop-filter: blur(3px);
    background-color: rgba(54, 45, 45, 0.1)
`
const Photo = styled.img`
    height: 150px;
`;
const H2 = styled.h2`
color: #30fcec;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;
const H3 = styled.h3`
  color: #CC844D;
  @media screen and (max-width: 768px) {
    font-size: 0.9em;
  }

`
const P = styled.p`
  color:white;
  @media screen and (max-width: 768px) {
    font-size: 0.8em;
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
                </About>
            </Wrapper>
        </Section>
    );
}

export default Team;