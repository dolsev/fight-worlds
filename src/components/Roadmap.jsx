import React from 'react';
import styled from "styled-components";
import Navbar from "./Navbar.jsx";

const Section = styled.div`
  display: flex;
  height: 100vh;
  background-image: url("/img/game-bg1.png");
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
    margin:5% 0;
  
  @media screen and (max-width: 1500px) {
    width: 768px;
    justify-content: center;
  }
`
const About = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 500px;
  gap: 60px;
  align-items: center;
  margin-bottom:10%;
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
    backdrop-filter: blur(5px);
    background-color: rgba(54, 45, 45, 0.4)

  }

  @media screen and (max-width: 768px) {
    width: 355px;
    gap:20px;
  }
`;

const H1 = styled.h1`
  color: #CC844D;
  font-weight: 900;
  letter-spacing: 2px;

`;
const H2 = styled.h2`
  color: #CC844D;
`;
const H3 = styled.h3`
  color:white;

`
const Description = styled.div`
  display: flex;
  flex-direction:column;
gap:15px;
`


function Hero() {
    const scrollDown = () => {
        const teamSection = document.querySelector('#team');
        teamSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <Section id='roadmap'>
            <Wrapper>
                <About>
                    <H1>Roadmap:</H1>
                    <Description>
                        <H3>To be added soon.
                        </H3>

                    </Description>
                </About>
            </Wrapper>
        </Section>
    );
}

export default Hero;