import React from "react";
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  color: #000000;
  background-color: white;
  margin-bottom: 0;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor:pointer;
  margin-bottom: 0;
  gap:15px;
`
const Links = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
  gap:2px;
  padding-bottom: 20px;
`
const List = styled.ul`
  display: flex;
  gap:20px;
  list-style: none;
`
const ListItem = styled.li`
  list-style: none;
  :hover{
    font-weight: 900;
  }

`

const Footer = ()=>{
    const handleLinksClick = () => {
        window.open('https://beamish-cvv.netlify.app/', '_blank');
    };

    const goToHome = () => {
        window.location.hash = '#home';
    };

    const goToTeam = () => {
        window.location.hash = '#team';
    };

    const goToWorks = () => {
        window.location.hash = '#works';
    };


    const goToRoadmap = () => {
        window.location.hash = '#roadmap';
    };
    return (
        <Section>
            <Container>
                <Links>
                    <List>
                        <ListItem onClick={goToHome}>Home</ListItem>
                        <ListItem onClick={goToTeam}>Team</ListItem>
                        <ListItem onClick={goToWorks}>Works</ListItem>
                        {/*<ListItem onClick={goToRoadmap}>Roadmap</ListItem>*/}
                    </List>
                    <ListItem style={{fontWeight:800}} onClick={goToHome}>FW Gaming</ListItem>
                    <ListItem onClick={handleLinksClick}>©2023 Vladislav Smirnov</ListItem>
                </Links>
            </Container>
        </Section>
    );
};
export default Footer