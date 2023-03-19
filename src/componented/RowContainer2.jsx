import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import SheaUnique from "../img/sheaunique.png"
import HairShea from '../img/hairshea.png'
import FootShea from '../img/footshea.png'
import Soap1 from "../img/facesoap.png"
import RawShea from "../img/rawshea.png"
import Soap2 from "../img/bodysoap.png"
import Soap3 from "../img/barsoap.png"
import BodyBalm from "../img/bodybalm.png"
import SheaLip from "../img/shealip.png"
import SheaDeep from "../img/sheadeep.png"
import SheaBaby from "../img/sheababy.png"
import HairFood from "../img/hairfood.png"
import { BsBag } from 'react-icons/bs'
import './Container.css'
import { useEffect } from 'react'


const RowContainer = ({flag, data, scrollValue}) => {
  console.log(data);
  const rowContainer = useRef()
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  return (
    <div 
    ref={rowContainer}
    className={`w-full my-12 bg-rowBg flex items-center scroll-smooth ${flag
      ? 'overflow-x-scroll scrollbar-none' 
      : 'overflow-x-hidden flex-wrap'
    }`}
    >
        <div className='w-300  min-w-[300px] md:min-w-[340px] h-auto bg-cardOverlay p-2 md:w-340 my-12  rounded-lg shadow-md backdrop-blur-lg mx-7 blury'>
            <div className='w-full flex items-center justify-between hover:drop-shadow-lg '>
                <motion.img whileHover={{scale: 1.2}} src={SheaUnique} alt="" className='w-40 -mt-8 drop-shadow-2xl' />
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center
                cursor-pointer hover:shadow-md'>
                        <BsBag className='text-white'/>
                </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
                <p className='font-semibold text-base
                md:text-lg text-textColor mx-23 rawb'>Raw Unscented Shea butter</p>
                <p className='mt-1 text-sm text-gray-500 skins'>Skincare</p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-textheadingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>12.99</p>
                </div>
            </div>
        </div>

        {/* second item */}

        <div className='w-300 min-w-[300px] md:min-w-[340px] h-auto bg-cardOverlay p-2 md:w-340 my-12 shadow-md backdrop-blur-lg mx-7 blury'>
            <div className='w-full flex items-center justify-between hover:drop-shadow-lg'>
                <motion.img whileHover={{scale: 1.2}} src={HairShea} alt="" className='w-40 -mt-8 drop-shadow-2xl' />
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center
                cursor-pointer hover:shadow-md'>
                        <BsBag className='text-white'/>
                </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
                <p className='font-semibold text-base
                md:text-lg text-textColor mx-23 rawb'>Raw Unscented Shea butter</p>
                <p className='mt-1 text-sm text-gray-500 skins'>Skincare</p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-textheadingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>12.99</p>
                </div>
            </div>
        </div>

          {/* third item */}

          <div className='w-300 min-w-[300px] md:min-w-[340px] h-auto bg-cardOverlay p-2 md:w-340 my-12 shadow-md backdrop-blur-lg mx-7 blury'>
            <div className='w-full flex items-center justify-between hover:drop-shadow-lg'>
                <motion.img whileHover={{scale: 1.2}} src={RawShea} alt="" className='w-40 -mt-8 drop-shadow-2xl' />
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center
                cursor-pointer hover:shadow-md'>
                        <BsBag className='text-white'/>
                </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
                <p className='font-semibold text-base
                md:text-lg text-textColor mx-23 rawb'>Raw Unscented Shea butter</p>
                <p className='mt-1 text-sm text-gray-500 skins'>Skincare</p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-textheadingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>12.99</p>
                </div>
            </div>
        </div>

          {/* fourth item */}

          <div className='w-300 min-w-[300px] md:min-w-[340px] h-auto bg-cardOverlay p-2 md:w-340 my-12 shadow-md backdrop-blur-lg mx-7 blury'>
            <div className='w-full flex items-center justify-between hover:drop-shadow-lg'>
                <motion.img whileHover={{scale: 1.2}} src={FootShea} alt="" className='w-40 -mt-8 drop-shadow-2xl' />
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center
                cursor-pointer hover:shadow-md'>
                        <BsBag className='text-white'/>
                </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
                <p className='font-semibold text-base
                md:text-lg text-textColor mx-23 rawb'>Raw Unscented Shea butter</p>
                <p className='mt-1 text-sm text-gray-500 skins'>Skincare</p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-textheadingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>12.99</p>
                </div>
            </div>
        </div>

          {/* fifth item */}

          <div className='w-300 min-w-[300px] md:min-w-[340px] h-auto bg-cardOverlay p-2 md:w-340 my-12 shadow-md backdrop-blur-lg mx-7 blury'>
            <div className='w-full flex items-center justify-between hover:drop-shadow-lg'>
                <motion.img whileHover={{scale: 1.2}} src={Soap1} alt="" className='w-40 -mt-8 drop-shadow-2xl' />
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center
                cursor-pointer hover:shadow-md'>
                        <BsBag className='text-white'/>
                </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
                <p className='font-semibold text-base
                md:text-lg text-textColor mx-23 rawb'>Raw Unscented Shea butter</p>
                <p className='mt-1 text-sm text-gray-500 skins'>Hair care</p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-textheadingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>12.99</p>
                </div>
            </div>
        </div>

          {/* 6th item */}

          <div className='w-300 min-w-[300px] md:min-w-[340px] h-auto bg-cardOverlay p-2 md:w-340 my-12 shadow-md backdrop-blur-lg mx-7 blury'>
            <div className='w-full flex items-center justify-between hover:drop-shadow-lg'>
                <motion.img whileHover={{scale: 1.2}} src={BodyBalm} alt="" className='w-40 -mt-8 drop-shadow-2xl' />
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center
                cursor-pointer hover:shadow-md'>
                        <BsBag className='text-white'/>
                </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
                <p className='font-semibold text-base
                md:text-lg text-textColor mx-23 rawb'>Raw Unscented Shea butter</p>
                <p className='mt-1 text-sm text-gray-500 skins'>Skincare</p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-textheadingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>12.99</p>
                </div>
            </div>
        </div>

          {/*7th item */}

          <div className='w-300 min-w-[300px] md:min-w-[340px] h-auto bg-cardOverlay p-2 md:w-340 my-12 shadow-md backdrop-blur-lg mx-7 blury'>
            <div className='w-full flex items-center justify-between hover:drop-shadow-lg'>
                <motion.img whileHover={{scale: 1.2}} src={Soap2} alt="" className='w-40 -mt-8 drop-shadow-2xl' />
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center
                cursor-pointer hover:shadow-md'>
                        <BsBag className='text-white'/>
                </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
                <p className='font-semibold text-base
                md:text-lg text-textColor mx-23 rawb'>Raw Unscented Shea butter</p>
                <p className='mt-1 text-sm text-gray-500 skins'>Skincare</p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-textheadingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>12.99</p>
                </div>
            </div>
        </div>

          {/* 8th item */}

          <div className='w-300 min-w-[300px] md:min-w-[340px] h-auto bg-cardOverlay p-2 md:w-340 my-12 shadow-md backdrop-blur-lg mx-7 blury'>
            <div className='w-full flex items-center justify-between hover:drop-shadow-lg'>
                <motion.img whileHover={{scale: 1.2}} src={SheaBaby} alt="" className='w-40 -mt-8 drop-shadow-2xl' />
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center
                cursor-pointer hover:shadow-md'>
                        <BsBag className='text-white'/>
                </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
                <p className='font-semibold text-base
                md:text-lg text-textColor mx-23 rawb'>Raw Unscented Shea butter</p>
                <p className='mt-1 text-sm text-gray-500 skins'>Skincare</p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-textheadingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>12.99</p>
                </div>
            </div>
        </div>

          {/* 9th item */}

          <div className='w-300 min-w-[300px] md:min-w-[340px] h-auto bg-cardOverlay p-2 md:w-340 my-12 shadow-md backdrop-blur-lg mx-7 blury'>
            <div className='w-full flex items-center justify-between hover:drop-shadow-lg'>
                <motion.img whileHover={{scale: 1.2}} src={SheaLip} alt="" className='w-40 -mt-8 drop-shadow-2xl' />
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center
                cursor-pointer hover:shadow-md'>
                        <BsBag className='text-white'/>
                </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
                <p className='font-semibold text-base
                md:text-lg text-textColor mx-23 rawb'>Raw Unscented Shea butter</p>
                <p className='mt-1 text-sm text-gray-500 skins'>Skincare</p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-textheadingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>12.99</p>
                </div>
            </div>
        </div>

          {/* 10th item */}

          <div className='w-300 min-w-[300px] md:min-w-[340px] h-auto bg-cardOverlay p-2 md:w-340 my-12 shadow-md backdrop-blur-lg mx-7 blury'>
            <div className='w-full flex items-center justify-between hover:drop-shadow-lg'>
                <motion.img whileHover={{scale: 1.2}} src={SheaDeep} alt="" className='w-40 -mt-8 drop-shadow-2xl' />
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center
                cursor-pointer hover:shadow-md'>
                        <BsBag className='text-white'/>
                </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
                <p className='font-semibold text-base
                md:text-lg text-textColor mx-23 rawb'>Raw Unscented Shea butter</p>
                <p className='mt-1 text-sm text-gray-500 skins'>Skincare</p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-textheadingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>12.99</p>
                </div>
            </div>
        </div>

          {/* 11th item */}

          <div className='w-300 min-w-[300px] md:min-w-[340px] h-auto bg-cardOverlay p-2 md:w-340 my-12 shadow-md backdrop-blur-lg mx-7 blury'>
            <div className='w-full flex items-center justify-between hover:drop-shadow-lg'>
                <motion.img whileHover={{scale: 1.2}} src={SheaBaby} alt="" className='w-40 -mt-8 drop-shadow-2xl' />
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center
                cursor-pointer hover:shadow-md'>
                        <BsBag className='text-white'/>
                </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
                <p className='font-semibold text-base
                md:text-lg text-textColor mx-23 rawb'>Raw Unscented Shea butter</p>
                <p className='mt-1 text-sm text-gray-500 skins'>Skincare</p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-textheadingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>12.99</p>
                </div>
            </div>
        </div>

          {/* 12th item */}

          <div className='w-300 min-w-[300px] md:min-w-[340px] h-auto bg-cardOverlay p-2 md:w-340 my-12 shadow-md backdrop-blur-lg mx-7 blury'>
            <div className='w-full flex items-center justify-between hover:drop-shadow-lg'>
                <motion.img whileHover={{scale: 1.2}} src={SheaBaby} alt="" className='w-40 -mt-8 drop-shadow-2xl' />
                <motion.div whileTap={{scale: 0.75}} className='w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center
                cursor-pointer hover:shadow-md'>
                        <BsBag className='text-white'/>
                </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
                <p className='font-semibold text-base
                md:text-lg text-textColor mx-23 rawb'>Raw Unscented Shea butter</p>
                <p className='mt-1 text-sm text-gray-500 skins'>Skincare</p>
                <div className='flex items-center gap-8'>
                  <p className='text-lg text-textheadingColor font-semibold'>
                    <span className='text-sm text-red-500'>$</span>12.99</p>
                </div>
            </div>
        </div>

     
    </div>
  )
}

export default RowContainer
