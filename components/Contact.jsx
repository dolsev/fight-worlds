import React, {useState} from 'react';
import styled, {keyframes} from "styled-components";
import Footer from "./Footer.jsx";
const Section = styled.div`
  height: 100vh;
  color: white;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-between;
  background: rgb(17, 17, 17);
  background: linear-gradient(5deg, rgba(23, 107, 95, 0.96) 14%, rgb(0, 96, 96) 41%, rgb(17, 49, 49) 71%, rgba(19, 33, 33, 0.96));
  @media screen and (max-width: 700px){
    flex-direction: column;
    gap:20px;

`
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  gap:50px;
  @media screen and (max-width: 700px){
    flex-direction: column;
    gap:10px;

  }
`
const Left = styled.div`
  display: flex;
  flex:1;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
    font-weight: 600;
  letter-spacing: 1.2px;
  @media screen and (max-width: 400px){
    font-size: 1.4rem;
  }
`
const Form = styled.form`
    width: 500px;
  display: flex;
  flex-direction: column;
  gap:25px;
  @media screen and (max-width: 700px){
    width: 100%;
  }
`
const Input = styled.input`
    padding:20px;
`
const TextArea = styled.textarea`
  padding:20px;
  max-width: 460px;
  min-width: 460px;
  @media screen and (max-width: 700px){
    max-width: 100%;
    min-width: 100%;
  }
`
const Button = styled.button`
  padding:20px;
  font-weight: 700;
  cursor:pointer;
  :hover {
    background-color: #30fcec;
  }
`
const FormWrap = styled.div`
display: flex;
gap:15px;
`
const Icons = styled.div`
display: flex;
  position: relative;
`
const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
`;
const Icon = styled.img`
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    animation: ${scaleAnimation} 2s infinite;

`
const TeleWindow = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  background-color: #fff;
  border: none;
  padding: 10px;
  z-index: 999;
  display: flex;
  width: 120px;
  flex-direction: column;
`
const Right = styled.div`
flex:1;
flex-direction:column;
display: flex;
  justify-content: center;

  gap:30px;
  @media screen and (max-width: 600px){
    gap:15px
  }
`
const Vacancies = styled.div`
  display: flex;
  flex-direction: column;
  gap:30px;
  @media screen and (max-width: 600px){
    gap:10px
  }
`
const Vacancy = styled.h2`
    font-weight: 400;
  @media screen and (max-width: 400px){
    font-size: 1.1rem;
  }
`
const Link = styled.a`
    text-decoration: none;
    color: black;
    font-size: 0.9em;
    font-weight: 600;
`

function Contact() {
    const handleSendEmail = (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const subject = `Message from ${name} (${email})`;
        const body = message;

        const mailtoUrl = `mailto:vladislav.smirnov.work@yandex.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
    };
    const [isOpen, setIsOpen] = useState(false);
    const telegramClick = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    };
    const vacanciesList = ['UE C++ Developer','UX/UI Designer', '2D Artist']
    return (
        <Section id='contact'>
            <Container>
                <Left>
                    <Form>
                        <FormWrap>
                        <Title>
                            Contact Us
                        </Title>
                        <Icons>
                            <Icon onClick={telegramClick} src='/img/icons8-telegram-50.png'/>
                            {isOpen && (
                                <TeleWindow>
                                    <Link href="https://t.me/fightworlds">1. Fight Worlds</Link>
                                    <Link href="https://t.me/zergomat">2. CEO</Link>
                                </TeleWindow>
                            )}
                        </Icons></FormWrap>
                        <Input id='name' type='text' placeholder='Name' required ></Input>
                        <Input id='email' type='email' placeholder='Email' required></Input>
                        <TextArea id='message' placeholder='Write your message'></TextArea>
                        <Button onClick={handleSendEmail}>Send</Button>
                    </Form>
                </Left>
                <Right>
                    <Title>We are looking for:</Title>
                    <Vacancies>
                        {vacanciesList.map((item,index)=>(
                            <Vacancy key={index}>{item}</Vacancy>
                        ))
                        }
                    </Vacancies>
                 </Right>
            </Container>
            <Footer/>

        </Section>
    );
}

export default Contact;