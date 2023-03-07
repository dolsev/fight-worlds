import styled from "styled-components";
import Hero from "./components/Hero.jsx";
import Works from "./components/Works.jsx";
import Contact from './components/Contact.jsx'
import Team from "./components/Team.jsx";


const Container = styled.div`
    height: 100vh;
    scroll-snap-type:y mandatory;
    scroll-behavior: smooth;
    overflow-y:auto;
    scrollbar-width:none;
    &::-webkit-scrollbar{
    display:none;
    }
`

function App() {

  return (
    <Container>
        <Hero/>
        <Team/>
        <Works/>
        <Contact/>
    </Container>
  )

}

export default App
