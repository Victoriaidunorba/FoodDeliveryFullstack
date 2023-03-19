import React from 'react'
import HeroBg from '../img/heroBg.png'
import Delivery from "../img/cream.png"
import Soap1 from "../img/facesoap.png"
import RawShea from "../img/rawshea.png"
import Soap2 from "../img/bodysoap.png"
import Soap3 from "../img/barsoap.png"
import BodyBalm from "../img/bodybalm.png"
import SheaBaby from "../img/sheababy.png"
import HairFood from "../img/hairfood.png"
import Best from "../img/bestseller.gif"
import './Background.css'
import './Slideshow.css'
import Shear from '../img/cream.png'

const Background = () => {
  return (
    <div className='bag flex px-14 -py-8'>
      <img src={Best} alt=""  className='bestseller'/>
      <h1 className='bestt'>OUR BESTSELLERS</h1>
    {/* <div> <h1>Join the pH5 FAM</h1>
    <p className='flex justify-center news'>and become a distributor today!</p>
<div className="buttons-container">
  <button className="buttonr yes">Interested</button>
  
</div></div> */}

<div className='flex shear'>
  <img src={Shear} alt="" />
</div>

    <div className='py-2 flex-1 flex items-center relative mine'>
        <img src={HeroBg} alt="hero-bg" className='h-420 w-full ml-auto lg:w-auto lg:h-650' />

        {/* <div className='w-full h-full top-0 left-0 px-32 py-4 flex items-center justify-center'>
            <div className='lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-md flex absolute flex-col items-center justify-center be'>
                <img src={Delivery} alt="II" className='lg:w-42 w-20 -mt-10 lg:-mt-20 been' />
                <p className='lg:text-xl text-base font-semibold text-textColor mt-2 lg:mt-4 news'>Body Mosturizer</p>

                <p className='text-sm text-lighttextGray font-semibold my-3 taviraj'>Coconut Scented body cream</p>

                <p className='text-sm font-semibold text-headingColor'>
                  <span className='text-xs text-red-600 glo'>$</span>19.99
                </p>
            </div>
            <div className='w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-md flex absolute flex-col items-center justify-center be1'>
                <img src={Soap1} alt="II" className='blk -mt-20 been' />
                <p className='text-xl font-semibold text-textColor mt-4 news'>Black Soap</p>

                <p className='text-sm text-lighttextGray font-semibold my-3 taviraj'>pH5 shea black soap facial wash & scrub</p>

                <p className='text-sm font-semibold text-headingColor'>
                  <span className='text-xs text-red-600 glo'>$</span>17.99
                </p>
            </div>
            <div className='w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-md flex absolute flex-col items-center justify-center be4'>
                <img src={Soap3} alt="II" className='w-40 -mt-20 been' />
                <p className='text-xl font-semibold text-textColor mt-4 news'>Body bar</p>

                <p className='text-sm text-lighttextGray font-semibold my-3 taviraj'>pH5 shea black soap + salicylic acid</p>

                <p className='text-sm font-semibold text-headingColor'>
                  <span className='text-xs text-red-600 glo'>$</span>14.99
                </p>
            </div>
            <div className='w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-md flex absolute flex-col items-center justify-center be3'>
                <img src={HairFood} alt="II" className='blk2 -mt-20 been' />
                <p className='text-xl font-semibold text-textColor mt-4 news'>Hair Food</p>

                <p className='text-sm text-lighttextGray font-semibold my-3 taviraj'>pH5 Shea intensive hair mosturizing pomade + protein treatment</p>

                <p className='text-sm font-semibold text-headingColor'>
                  <span className='text-xs text-red-600 glo'>$</span>28.99
                </p>
            </div>
        </div> */}

        <div className='w-full h-full top-0 left-0 another py-4 flex items-center justify-center'>
            <div className='w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-md flex absolute flex-col items-center justify-center be'>
                <img src={BodyBalm} alt="II" className='balm -mt-20 been' />
                <p className='text-xl font-semibold text-textColor mt-4 news'>Shea body balm</p>

                <p className='text-sm text-lighttextGray font-semibold my-3 taviraj'>Shea body balm + Menthol for pain relief.</p>

                <p className='text-sm font-semibold text-headingColor'>
                  <span className='text-xs text-red-600 glo'>$</span>28.99
                </p>
            </div>
            <div className='w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-md flex absolute flex-col items-center justify-center be1'>
                <img src={SheaBaby} alt="II" className='blk -mt-20 been' />
                <p className='text-xl font-semibold text-textColor mt-4 news'>pH5 Baby Shea</p>

                <p className='text-sm text-lighttextGray font-semibold my-3 taviraj'>pH5 shea baby mosturizer + olive oil</p>

                <p className='text-sm font-semibold text-headingColor'>
                  <span className='text-xs text-red-600 glo'>$</span>17.99
                </p>
            </div>
            <div className='w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-md flex absolute flex-col items-center justify-center be2'>
                <img src={RawShea} alt="II" className='w-42 -mt-20 been' />
                <p className='text-xl font-semibold text-textColor mt-4 news'>Body Mosturizer</p>

                <p className='text-sm text-lighttextGray font-semibold my-3 taviraj'>pH5 raw + unscented body butter</p>

                <p className='text-sm font-semibold text-headingColor'>
                  <span className='text-xs text-red-600 glo'>$</span>12.99
                </p>
            </div>
            <div className='w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-md flex absolute flex-col items-center justify-center be3'>
                <img src={Soap2} alt="II" className='blk2 -mt-20 been' />
                <p className='text-xl font-semibold text-textColor mt-4 news'>pH5 body wash</p>

                <p className='text-sm text-lighttextGray font-semibold my-3 taviraj'>pH5 shea body wash + sea salt + vitamin C </p>

                <p className='text-sm font-semibold text-headingColor'>
                  <span className='text-xs text-red-600 glo'>$</span>28.99
                </p>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Background