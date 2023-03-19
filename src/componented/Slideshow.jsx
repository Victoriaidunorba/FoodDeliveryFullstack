import React from 'react'
import styled from "styled-components"
import './Slideshow.css'

const Wrapper = styled.div`
   height: 100%;
   display: flex;
   transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Container = styled.div`
    width: 100%;
    hegiht: 100vh;
    display: flex;
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
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    background-color: #${props=>props.bg};
`
const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    padding: 50px;
    background-color: transparent;
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

const colors = [{
    id: 1,
    img: require('../img/baby.png'),
    title: "SUMMER SALE",
    desc: "JALHGJLAGHLAGH",
    bg: "fcf1ed",
    
},
{
    id: 2,
    img: require('../img/skin3.jpg'),
    title: "SUMMER SALES",
    desc: "JALHGnlkjJLAGHLAGH",
    bg: "fcf1ed"

},
{
    id: 3,
    img: require('../img/skin1.png'),
    title: "SUMMER SALEE",
    desc: "JALHGJLAjkGHLAGH",
    bg: "000 "
},
{
    id: 4,
    img: require('../img/pregnant.png'),
    title: "SUMMER SAaLEE",
    desc: "JALknlHGJLAGHLAGH",
    bg: "fcf1ed"
},
{
  id: 5,
  img: require('../img/hair.png'),
  title: "SUMMER SAalLEE",
  desc: "JALknlHGJLAGHklLAGH",
  bg: "f5fafd"
},];
const delay = 2500;


 


const Slideshow = () => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  return (
    <Container>
        <Wrapper>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          >
           <ImgContainer bg={backgroundColor.bg}>
            <Image src={backgroundColor.img} />
            </ImgContainer>
            <InfoContainer bg={backgroundColor.bg}>
                <Title>{backgroundColor.title}</Title>
                <Desc>{backgroundColor.desc}</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
          </div>
          
        ))}
      </div></Wrapper>
     


      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> 
    </Container>
  )
}

export default Slideshow
