import React from 'react';
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
   background-image: url("/img/game-bg2.png");
  background-size: cover;

  color: white;
  scroll-snap-align: center;
  flex-direction: column;
  align-items:center;

`
const Wrapper = styled.div`
    display: flex;
    margin:5% 5%;
  flex-wrap: wrap;
  width: 1400px;
  
@media screen and (max-width:768px){
  width: auto;

}
`
const About = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 500px;
  gap: 60px;
  align-items: center;
  flex:1;
  flex-wrap: wrap;
  backdrop-filter: blur(5px);
  background-color: rgba(9, 5, 5, 0.1);
  padding:20px;

  @media screen and (max-width: 768px) {
    gap:20px;
  }
  @media screen and (max-width: 520px) {
    width: 320px;
  }
`;
const Iframe = styled.iframe`
  width: 460px;
  height:259px;
  border:none;
  @media screen and (max-width: 768px) {
    width: 320px;
    gap:20px;
  }

`
const H1 = styled.h1`
  color: #ffffff;
  font-weight: 900;
  letter-spacing: 2px;
`;
const H2 = styled.h2`
  color: #CC844D;
`;

const Continue = styled.button`
  width: 200px;
  padding: 10px 5px;
  background-color: white;
  font-weight: 800;
  cursor: pointer;
  border: none;

  :hover {
    background-color: #30fcec;
  }
`;

const Buttons = styled.div`
`
const HR = styled.hr`
width: 300px;
`
const Animation = styled.div`
  flex:1;
  @media screen and (max-width: 768px) {
  display: none;
  }

`
function Works() {
    const scrollDown = () => {
        const teamSection = document.querySelector('#roadmap');
        teamSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <Section id='works'>
            <Wrapper>
                <About>
                    <H2>Currently In Development:</H2>
                    <HR/>
                    <H1>Fight Worlds:Noira - The Beginning of Syndicates</H1>
                    <Iframe   src="https://www.youtube.com/embed/zo2zbJSHrUk"
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen ></Iframe>
                    <Buttons>
                        <Continue onClick={scrollDown}>Roadmap</Continue>
                    </Buttons>
                </About>
                <Animation>

                </Animation>
            </Wrapper>

        </Section>
    );
}

export default Works;