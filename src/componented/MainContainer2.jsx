import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Delivery from "../img/bike.jpg"
import Skin1 from "../img/pregnant.png"
import Baby from "../img/brownskin.png"
import Babys from "../img/baby.png"
import Shea from "../img/sheanut.png"
import Background from "../img/background.webp"
import Sheabowl from "../img/bowl.png"
import './Container.css'
import styled from "styled-components"
import './Slideshow.css'
import Features from './Features';
import HomeContainer from './HomeContainer';

const colors = [{
  id: 1,
  img: "require('../img/skins.png')",
  title:"Your Skins," ,
  span: "Best Friend",
  desc: "Science partnering with mother nature to make all your",
  sapa: "skin dreams",
  sapan: "come true!",
  bg: "fcf1ed",
},
{
  id: 2,
  img: require('../img/hair.png'),
  title: "SUMMER SALES",
  span: "Best Friend",
  desc: "fritz? Retain moisture with our All natural unique shea hair booster ",
  bg: "fcf1ed",

},
{
  id: 3,
  img: require('../img/pregnant.png'),
  title: "Stretch Marks Terminator",
  span:"ngafiojpfoadjsfia;fdjfandjfajo",
  desc: "OUR DKAHGAHFAOSIDHFAOIDFHDPFIOAHDPFIDJFPOADISJFHAPDGPDPFJADPOIFHPADIFHPADFJOD",
  bg: "fcf1ed",
},
{
  id: 4,
  img: require('../img/skin1.png'),
  span: "Best Friend",
  desc: "Keeping your skin smooth as milk",
  sapa: "skin dreams",
  bg: "fcf1ed",
},
{
id: 5,
img: require('../img/baby.png'),
span: "Best Friend",
  desc: "Science partnering with mother nature to make all your",
  sapa: "skin dreams",
  bg: "fcf1ed",
},

];

const Spans = styled.span`

`
const Container = styled.div`
  background-color: #${props=>props.bg};
`
const Spana = styled.span`
  color:  #${props=>props.color};
`
const delay = 2500;

const MainContainer = () => {
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
    <div className=' h-auto flex flex-col apps' id='hero'>
    
    <Container className='contains py-20'>
     
            
   <div className='inline-flex grid-cols-1 md:grid-cols-2 gap-2' >
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='btx flex items-center gap-2 justify-center  px-2 py-1 rounded-full mt-14 put'>
          <p className='text-base text-white font-semibold deliver'>Free Delivery within Lagos</p>
         <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
          <img src={Delivery} className='w-full h-full object-contain' alt="delivery" />
          </div>
        </div>
       

          <div className='putt'>
        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor spans'>Your Skin's<Spans className='text-[3rem] spans' color='1b8112'> Best Friend</Spans></p>

        <p className='text-base text-black text-center md:text-left span2'>Science partnering with mother nature to make all your <Spana className='text-primary4 italic font-bolder underline'> skin dreams</Spana> come true!
          </p>
          <p className='text-base text-black text-center md:text-left span2'>Fortified with triterpene extracts!</p>

          <button type='button' 
          className='buttonx md:w-auto'>
          Order Now</button>
          <div className='circle'></div></div>    

      </div>

 
      
              
      <div className='py-2 flex-1 baby first'>
        <div className='flex' id='hero' >
        <img src={Sheabowl} alt="" className='bowl'/>
          <img src={Baby} alt="" className='bimage'/>
          <img src={Babys} alt="" className='bimages'/>
          <img src={Shea} alt="" className='cimages'/>
        </div>
      </div> 

    </div> 
<div className='blur' style={{background: '#C1F5FF',top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}>

</div>


  </Container>  
  <Features />
      <HomeContainer/>
  </div>
  ) 
}

export default MainContainer