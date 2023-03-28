import React from 'react';
import { useState } from 'react';
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  height: 100vh;
  background-size: cover;
  color: white;
  scroll-snap-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(17, 17, 17);
  background: linear-gradient(5deg, rgba(23, 107, 95, 0.96) 14%, rgb(0, 96, 96) 41%, rgb(31, 87, 87) 71%, rgba(34, 121, 121, 0.96));

`
const Wrapper = styled.div`
  display: flex;
  gap:40px;
  margin-bottom: 30px;
  @media screen and (max-width: 900px) {
    gap:10px;
  }
  @media screen and (max-width: 560px){
    flex-direction: column;
    margin-bottom: 10px;

  }
`
const Title = styled.div`
    display: flex;
  flex-direction: column;
  margin:0 auto 50px;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1200px) {
    max-width: 700px;
    margin:0 auto 0;

  }

`
const Header = styled.h1`
  display: flex;
  color: #30fcec;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 1.7em;
  @media screen and (max-width: 700px){
    font-size: 1.3em;

  }
`;
const H2= styled.span`
  font-size: 1em;
  color: white;
  font-weight: 600;
`;
const H3= styled.span`
  font-size: 0.8em;
  color: #dedada;
  font-weight: 600;

`;
const Left = styled.div`
  flex:1;
  display: flex;
flex-direction: column;
  gap:10px;
  width: 100%;

`
const Videos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  height: 100%;
  justify-content: space-evenly;
  @media screen and (max-width: 1130px) {
    gap:15px;
  }
  @media screen and (max-width: 560px) {
    flex-direction: row;
    gap:10px;

  }
  
`;
const Iframe = styled.iframe`
  width: 320px;
  height: 180px;
  border: 5px white solid;
  border-radius: 5px;
  &:hover {
    border: 5px #30fcec solid;
  }
  @media screen and (max-width: 1130px) {
    width: 180px;
    height: 110px;
  }
  @media screen and (max-width: 400px){
    width: 140px;
    height:80px;
  }
`
const Right = styled.div`
  flex:1;
  gap:10px;
  display: flex;
  flex-direction: column;
`
const Screenshots = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr); 
  grid-gap: 30px;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  justify-content: space-evenly;
  @media screen and (max-width: 900px) {
    gap:15px;
  }
  @media screen and (max-width: 560px) {
    flex-direction: row;
    gap:5px;

  }
`
const ScreenShotWrapper = styled.div`
  width: 256px;
  height: 144px;
  border: 5px white solid;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 5px #30fcec solid;

  }

  @media screen and (max-width: 1130px) {
    width: 160px;
    height: 88px;
  }
  @media screen and (max-width: 400px) {
    width: 140px;
    height: 80px;
  }
`;


const ScreenShot = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  width: 90%;
  height: 90%;
`;
const ModalImageWrapper = styled.div`

`
const ModalImage = styled.img`
  object-fit: cover;
  width: 100%;
`;


const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  height: 40px;
  width: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  content: "<";
  color: black;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  height: 40px;
  width: 40px;
  color: black;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  content: ">";

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const Continue = styled.button`
  width: 200px;
  padding: 10px 5px;
  background-color: white;
  font-weight: 800;
  cursor:pointer;
  border-radius: 15px;
  border:none;

  &:hover {
    background-color: #30fcec;
  }
`
function Works() {
    const scrollDown = () => {
        const teamSection = document.querySelector('#roadmap');
        teamSection.scrollIntoView({ behavior: 'smooth' });
    };
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const screenshots = [
        'https://cdn.cloudflare.steamstatic.com/steam/apps/534120/ss_d89979f566130f7d16b2381c6f3b55189e7e1261.1920x1080.jpg?t=1678566839',
        'https://cdn.cloudflare.steamstatic.com/steam/apps/534120/ss_4bdf0dbc27f5211bfe55d07c4d44710b40b349f5.1920x1080.jpg?t=1678566839',
        'https://cdn.cloudflare.steamstatic.com/steam/apps/534120/ss_39f7747010ab90083fe005e069376237106dd251.1920x1080.jpg?t=1678566839',
        'https://cdn.cloudflare.steamstatic.com/steam/apps/534120/ss_9aa5e5d69b9f3bc4d379a1ca9812c972eea25f35.1920x1080.jpg?t=1678566839',
        'https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/59d325cd-39e2-4a2e-9784-a85c9966cf41.webp',
        'https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/d71d4020-3afe-4e42-b9ca-ffd7af43511e.webp'
    ]
    return (
        <Section id='works'>
            <Title><H2>Currently In Development:</H2><Header> Fight Worlds:Noira - The Beginning of Syndicates</Header>
            </Title>
            <Wrapper>
                <Left>
                    <H3>Videos</H3>
                    <Videos>
                        <Iframe   src="https://www.youtube.com/embed/zo2zbJSHrUk"
                                  title="YouTube video player"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen ></Iframe>
                        <Iframe   src="https://www.youtube.com/embed/uVGwHYC3qjk"
                                  title="YouTube video player"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen ></Iframe>
                    </Videos>
                </Left>
                <Right>
                    <H3>Screenshots</H3>
                    {selectedImage && (
                        <ModalWrapper onClick={() => setSelectedImage(null)}>
                            <ModalContent>
                                <LeftArrow onClick={(event) => {
                                    event.stopPropagation();
                                    if (currentIndex > 0) {
                                        setCurrentIndex(currentIndex - 1);
                                    } else {
                                        setCurrentIndex(screenshots.length - 1);
                                    }
                                }}>
                                    {'<'}
                                </LeftArrow>
                                <ModalImageWrapper>
                                <ModalImage src={`${screenshots[currentIndex]}`} alt="" />
                                </ModalImageWrapper>
                                <RightArrow onClick={(event) => {
                                    event.stopPropagation();
                                    if (currentIndex < screenshots.length - 1) {
                                        setCurrentIndex(currentIndex + 1);
                                    } else {
                                        setCurrentIndex(0);
                                    }
                                }}>
                                    {'>'}
                                </RightArrow>
                            </ModalContent>
                        </ModalWrapper>
                    )}

                    <Screenshots>
                        {screenshots.map((screenshot, index) => (
                            <ScreenShotWrapper key={index} onClick={() => {
                                setSelectedImage(screenshot);
                                setCurrentIndex(index);
                            }}>
                                <ScreenShot src={`${screenshot}`} alt="" />
                            </ScreenShotWrapper>
                        ))}
                    </Screenshots>
                </Right>
            </Wrapper>
            <Continue onClick={scrollDown}>Roadmap</Continue>

        </Section>
    );
}

export default Works;