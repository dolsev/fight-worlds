import React from "react";
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
    color:#58D7CF;
`
const Container = styled.div`
  display: flex;
    width:1000px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
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

`
const Icons = styled.div`

  display: flex;
  align-items:center;
  gap:20px;
    `
const Icon = styled.img`
  height: 16px;
  
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
    return (
        <Section>
            <Container>
                <Links>
                    <Logo>FIGHT WORDS studio</Logo>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./img/search.png" />
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    );
};
export default Navbar