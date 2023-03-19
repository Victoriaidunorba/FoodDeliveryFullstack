import React from 'react'
import './Container.css'
import {IoMdArrowDropleft} from "react-icons/io"
import {IoMdArrowDropright} from "react-icons/io"
import 'react-slideshow-image/dist/styles.css'
import Baby from "../img/skins.png"
import Babe from "../img/baby.png"
import Skin from "../img/skin1.png"
import Skins from "../img/skin2.jpg"
import { useState } from 'react';
import styled from "styled-components"
import {sliderItems} from "./data"

const Wrapper = styled.div`
   height: 100%;
   display: flex;
   transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Container = styled.div`
    width: 100%;
    hegiht: 100vh;
    display: flex;
    background-color: coral;
    overflow: hidden;
`
const Arrow = styled.div   `
    width: 50px;
    height: 50px;
    background-color: #a78571;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    align-self: center;
    align-content: center;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    z-index: 2;
`
const Slider = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Image = styled.img`
    height: 80%;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
`


const Slideshow = ({}) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick =(direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }
  return (
       <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <IoMdArrowDropleft/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
        <Slider bg="fcf1ed">
            <ImgContainer>
            <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slider>
            ))}
        </Wrapper> onClick={()=>handleClick("right")}
        <Arrow direction="right">
            <IoMdArrowDropright/>
        </Arrow>
       </Container>
  
)
}

export default Slideshow
