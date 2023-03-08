import React, {useState} from "react";
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  color: #58D7CF;
`
const Container = styled.div`
  display: flex;
    width:1000px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    cursor:pointer;
  

`
const Links = styled.div`
  display: flex;
  align-items:center;
  gap:50px;
    `
const Logo = styled.div`
  letter-spacing: 3px;
  font-weight: 900;
  font-size:24px;
  color:white;
  
`
const List = styled.ul`
  display: flex;
  gap:20px;
  list-style: none;
    `
const ListItem = styled.li`
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
const Icons = styled.div`

  display: flex;
  align-items:center;
  gap:20px;
    `
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #30fcec;
  font-weight: 800;
  border: none;
  color: black;
  border-radius: 10%;
  cursor:pointer;
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
                    <Logo onClick={goToHome}>FW gaming</Logo>
                    <List>
                        <ListItem onClick={goToHome}>Home</ListItem>
                        <ListItem onClick={goToTeam}>Team</ListItem>
                        <ListItem onClick={goToWorks}>Works</ListItem>
                        <ListItem onClick={goToRoadmap}>Roadmap</ListItem>
                        <ListItem onClick={goToContact}>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Button onClick={goToContact}>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    );
};
export default Navbar