import React from "react";
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  color: #58D7CF;
  width: 1000%;

`
const Container = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #0c0b0b;
  border-bottom-left-radius:100px;
  border-bottom-right-radius:100px;
  border:5px solid #58D7CF;
  border-top:none;
  @media screen and (max-width: 1000px) {
    height:140px;
    width: 100%;
    gap: 10px;
  }
`
const Links = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-around;
  width: 100%;
  gap:20px;
  @media screen and (max-width: 1000px){
    gap:15px;
    flex-direction: column;

  }
    `
const LogoWrapper = styled.div`
display: flex;
  align-items: center;
  gap:10px;
`
const LogoText = styled.h1`
 color:white;
  font-size: 1.2em;
  font-weight: 900;
  letter-spacing: 3px;

`
const Logo = styled.img`
 height: 96px;
  @media screen and (max-width: 900px){
    height: 48px;
  }
`
const List = styled.ul`
  display: flex;
  list-style: none;
  gap:20px;
  @media screen and (max-width: 400px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:10px;
  }
    `
const ListItem = styled.li`
  font-size:20px;
  :hover{
    color:white;
  }
  animation: slideTop 0.5s ease-in-out;
}
  @keyframes slideTop{
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`


const Navbar = ()=>{
    const goToHome = () => {
        window.location.hash = '#home';
    };

    const goToTeam = () => {
        window.location.hash = '#team';
    };

    const goToWorks = () => {
        window.location.hash = '#works';
    };

    const goToContact = () => {
        window.location.hash = '#contact';
    };

    const goToRoadmap = () => {
        window.location.hash = '#roadmap';
    };
    return (
        <Section>
            <Container>
                <Links>
                        <LogoWrapper>
                            <Logo onClick={goToHome} src='./img/fw-logo.png'></Logo>
                            <LogoText>Fight Worlds</LogoText>
                        </LogoWrapper>
                    <List>
                        <ListItem onClick={goToTeam}>Team</ListItem>
                        <ListItem onClick={goToWorks}>Works</ListItem>
                         <ListItem onClick={goToRoadmap}>Roadmap</ListItem>
                        <ListItem onClick={goToContact}>Contact/Career</ListItem>
                    </List>
                </Links>
            </Container>
        </Section>
    );
};
export default Navbar