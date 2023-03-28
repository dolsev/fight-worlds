import React from 'react';
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  color: white;
  scroll-snap-align: center;
  flex-direction: column;
  background: rgb(17, 17, 17);
  background: linear-gradient(175deg, rgba(18, 31, 31, 0.96) 14%, rgb(21, 91, 91) 41%, rgb(35, 115, 115) 71%, rgba(34, 121, 121, 0.96));
`
const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 1130px) {
  }
`

const About = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
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
  gap:100px;

  @media screen and (max-width: 1130px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto auto auto;
    gap:40px;
  }
  @media screen and (max-width: 600px) {
    gap:20px;

  }
`
const Portfolio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:45px;
  @media screen and (max-width: 1130px){
    flex-direction: row;
    align-items:center;
    gap:15px;
  }
`

const Photo = styled.img`
  object-fit: cover;
  height: 250px;
  width: 250px;
  border: 5px solid #ffffff;
  border-radius: 15px;
  gap:10px;
  
  @media screen and (max-width: 1440px) {
    height: 200px;
    width: 200px;
  }
  @media screen and (max-width: 1130px) {
    height: 130px;
    width: 130px;
  }
  @media screen and (max-width: 400px){
    height: 100px;
    width: 100px;
  }
`;
const Title = styled.div`

`
const H1 = styled.h1`
  color: #ffffff;
  font-weight: 900;
  @media screen and (max-width: 1130px) {
    font-size: 1.1em;
  }
`;

const H2 = styled.h2`
  color: #30fcec;
  @media screen and (max-width: 630px){
    font-size: 1.0em;
  }
`;

const H3 = styled.h3`
  color: #a9a7a7;
  @media screen and (max-width: 630px) {
    font-size: 0.9em;
  }
`
const P = styled.p`
  color:white;
  @media screen and (max-width: 630px){
    font-size: 0.8em;
  }
`
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and  (max-width: 1130px){
    flex-direction:row;
    gap:15px;
    justify-content: center;
  }
`
const Description = styled.div`
  margin-top:10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  max-width:300px;
  @media screen and  (max-width: 1130px){
    max-width: 600px;
  }
`


function Team() {
    return (
        <Section id='team'>
            <Wrapper>
                <Title><H1>Our Team:</H1>
                </Title>
                <About>
                    <Portfolio>
                    <Photo src='./img/SM-photo.jpg'/>
                    <Description>
                        <Profile>
                            <H2>{`> `}Sergey Matulkov</H2>
                            <H3>CEO</H3>
                        </Profile>
                        <P>
                            Since 2008 he has been working in the position CTO and Delivery Manager at Apalon. Full cycle of development master.<br/>
                            Improves the quality of products from verification hypothesis.<br/>
                            Also has skills in modeling, design, and drawing.<br/>
                        </P>
                    </Description>
                    </Portfolio>
                    <Portfolio>
                        <Photo src='https://images.unsplash.com/photo-1558565701-31805fdd5c64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'/>
           <Description>
                        <Profile>
                            <H2>{`> `}Ivan Kivlev</H2>
                            <H3>Director</H3>
                        </Profile>
                            <P>
                                Working in development since 2012.
                                Since 2016 he has been working in the position
                                of Game Director at Box Squad Games.
                            </P>
                        </Description>
                    </Portfolio>
                    <Portfolio>
                        <Photo src='https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                        <Description>
                            <Profile><H2>{`> `}Vadim Eliseev</H2>
                                <H3>Game Developer</H3>
                            </Profile>
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