import React from 'react';
import styled from "styled-components";
import Navbar from "./Navbar.jsx";

const Section = styled.div`
  display: flex;
  height: 100vh;
  background-image: url("/img/main-bg.png");
  background-size: cover;
  color: white;
  scroll-snap-align: center;
  flex-direction: column;
  align-items:center;

`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
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
  margin-bottom: 10%;
  animation: slideIn 0.5s ease-in-out;
  @keyframes slideIn {
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
    background-color: rgba(9, 5, 5, 0.5);
    padding: 15px;
    border-radius: 5%;

    @media screen and (max-width: 768px) {
      width: 355px;
      gap: 20px;
    }
`;

const H1 = styled.h1`
  color:#58D7CF;
  font-weight: 900;
  letter-spacing: 2px;

`;
const H2 = styled.h2`
  color: #CC844D;
`;
const H3 = styled.h3`
  color:white;

`

const Button = styled.button`
  width: 200px;
  padding: 10px 5px;
  background-color: #30fcec;
  font-weight: 800;
  cursor: pointer;

  :hover {
    background-color: #ffffff;
  }
`;
const Continue = styled.button`
  width: 200px;
  padding: 10px 5px;
  background-color: white;
  font-weight: 800;
  cursor:pointer;
  :hover {
    background-color: #30fcec;
  }
`;

const Buttons = styled.div`
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
    const goToContact = () => {
        window.location.hash = '#contact';
    };

    return (
        <Section id='hero'>
            <Navbar/>
            <Wrapper>
                <About>
                    <H2>We are</H2>
                    <H1>Fight Worlds Gaming</H1>
                    <Description>
                    <H3>And we are making Causal Sci-Fi games on Unity/Unreal for 12+ gamers targeting 21+ audiences.
                    </H3>
                    <H3>Currently we are developing MMORPG Casual Tower-Defence game called 'Fight Worlds'.
                    </H3>
                    <H3> We understand the importance of balancing gameplay mechanics, level design, and visual elements to deliver a
                        game that is both challenging and fun.
                    </H3>
                    </Description>
                    <Buttons>
                    <Button onClick={goToContact}>Contact Us</Button>
                    <Continue onClick={scrollDown}>Read more</Continue>
                    </Buttons>
                </About>
            </Wrapper>
        </Section>
    );
}

export default Hero;