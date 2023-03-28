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
    width: 100%;
    justify-content: center;
  }

`
const About = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 500px;
  gap: 48px;
  align-items: center;
  margin-bottom: 10%;
  animation: slideIn 0.5s ease-in-out;
  max-width: 400px;
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
    max-width: 768px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 15px;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
      gap: 20px;
    }
`;
const Title = styled.div`
display: flex;
flex-direction:column;
`
const H1 = styled.h1`
  color:#30fcec;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 1.6em;

`;
const H2 = styled.h2`
  color:white;
  font-size: 1.2em;

`;
const H3 = styled.h3`
  color:white;
  font-size: 1em;
`
const Button = styled.button`
  width: 200px;
  padding: 10px 5px;
  background-color: #30fcec;
  border-radius: 15px;
  border:none;
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
  border-radius: 15px;
  border:none;

  :hover {
    background-color: #30fcec;
  }
`;

const Buttons = styled.div`
    gap:5px;
  display: flex;
  @media screen and (max-width: 400px){
    flex-direction: column;
  }
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
        <Section id='home'>
            <Navbar/>
            <Wrapper>
                <About>
                    <Title><H2>We are</H2><H1>Fight Worlds Gaming</H1></Title>
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