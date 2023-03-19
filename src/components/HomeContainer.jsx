import React from "react";
import Delivery from "../img/bike.jpg";
import HeroBg from "../img/background.jpeg";
import { heroData } from "../utils/data";
import styled from "styled-components"
import './Container2.css'


const Spans = styled.span`

`
const Container = styled.div`
  background-color: #${props=>props.bg};
`
const Spana = styled.span`
  color:  #${props=>props.color};
`
const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="inline-flex grid-cols-1 md:grid-cols-2 gap-2">
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='btx flex items-center gap-2 justify-center  px-2 py-1 rounded-full mt-14 put'>
          <p className='text-base text-white font-semibold deliver'>Free Delivery within Lagos</p>
         <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
          <img src={Delivery} className='w-full h-full object-contain' alt="delivery" />
          </div>
        </div>
       

          <div className='putt'>
        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'>You Call<Spans className='text-[3rem] spans' color='1b8112'> We Deliver</Spans></p>

        <p className='text-base text-black text-center md:text-left'>Where Healthy & Deliciousness 😋 come together to make all your <Spana className='text-primary4 italic font-bolder underline'> foodie dreams</Spana> come true!
          </p>
          <p className='text-base text-black text-center md:text-left'>Freshness & extra flavour!</p>

          <button type='button' 
          className='buttonx md:w-auto'>
          Order Now</button>
          <div className='circle'></div></div>    

      </div>

        

        

       
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 grid items-center justify-center lg:px-32  py-4 gap-4 grid-cols-2">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
