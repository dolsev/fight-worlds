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
  justify-content: space-between;
  align-items:center;

`
function Hero(props) {
    return (

        <Section>
            <Navbar/>
        </Section>
    );
}

export default Hero;