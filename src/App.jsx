import styled from "styled-components";
import Hero from "./components/Hero.jsx";
import Works from "./components/Works.jsx";
import Contact from './components/Contact.jsx'
import Team from "./components/Team.jsx";
import Roadmap from "./components/Roadmap.jsx";


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: rgb(17, 17, 17);
  background: linear-gradient(30deg, rgba(3, 5, 5, 0.96) 14%, rgb(31, 58, 58) 41%, rgb(31, 87, 87) 71%, rgba(39, 44, 44, 0.96));

  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {

  return (
    <Container>
        <Hero/>
        <Team/>
        <Works/>
         <Roadmap/>
        <Contact/>
    </Container>
  )

}

export default App
