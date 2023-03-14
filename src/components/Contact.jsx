import React, {useState} from 'react';
import styled from "styled-components";
import Footer from "./Footer.jsx";
const Section = styled.div`
  
  height: 100vh;
  background-color: #090C11;
  color: white;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  gap:150px;
  justify-content: flex-end;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap:50px;
`
const Left = styled.div`
  display: flex;
  flex:2;
  align-items: center;
  justify-content: center;

`
const Title = styled.h1`
    font-weight: 200;
`
const Form = styled.form`
    width: 500px;
  display: flex;
  flex-direction: column;
  gap:25px;
  @media screen and (max-width: 600px){
    width: 100%;
  }
`
const Input = styled.input`
    padding:20px;
`
const TextArea = styled.textarea`
  padding:20px;

`
const Button = styled.button`
  padding:20px;
  font-weight: 700;
  cursor:pointer;
  :hover {
    background-color: #30fcec;
  }
 
`
const Right = styled.div`
flex:3;
  position:relative;
  @media screen and (max-width: 950px){
    display: none;
  ;
  }
`
const Img = styled.img`
    width: 800px;
    height: 600px;
  object-fit: contain;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {transform: translateY(50px)}
  }
  @media screen and (max-width: 1400px){
    width: 400px;
    height: 300px;
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
const Icon = styled.img`
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
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
const Link = styled.a`
    text-decoration: none;
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
    return (
        <Section id='contact'>
            <Container>
                <Left>
                    <Form>
                        <FormWrap>
                        <Title>
                            Contact Us
                        </Title>
                        <Icons><Icon onClick={telegramClick} src='/img/icons8-telegram-50.png'/>
                            {isOpen && (
                            <TeleWindow>
                                <Link href="https://t.me/fightworlds">1. Fight Worlds</Link>
                                <Link href="https://t.me/zergomat">2. CEO</Link>
                            </TeleWindow>
                        )}</Icons></FormWrap>
                        <Input id='name' type='text' placeholder='Name' required ></Input>
                        <Input id='email' type='email' placeholder='Email' required></Input>
                        <TextArea id='message' placeholder='Write your message'></TextArea>
                        <Button onClick={handleSendEmail}>Send</Button>
                    </Form>
                </Left>
                <Right>
                    <Img src='/img/mail.png'/>
                </Right>
            </Container>
            <Footer/>
        </Section>
    );
}

export default Contact;