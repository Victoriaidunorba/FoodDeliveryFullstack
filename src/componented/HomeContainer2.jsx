import React, { useEffect, useState, useRef } from 'react'
import SecondContainer from './SecondContainer'
import { motion } from 'framer-motion'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer2'
import { useStateValue } from "../context/StateProvider"
import MenuContainer from './MenuContainer2'
import CartContainer from './CartContainer2'

import Commerce from '@chec/commerce.js';

const HomeContainer2 = () => { 
  const [{foodItems, cartShow}, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);


 useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <SecondContainer/>

      <section className='w-full my-6'>
        <div className="w-full flex items-center justify-between">
          <p className='text-2xl font-semibold text-headingColor capitalize relative 
          before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:bottom-0
          before:left-0 before:bg-gradient-to-tr from-green-400 to-green-600 
          transition-all ease-in-out duration-100 mx-7 tavi'>
            Our Products
          </p>

          <div className='hidden md:flex gap-3 items-center mx-8'>
              <motion.div whileTap={{scale : 0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer
              hover:shadow-lg flex items-center justify-center'
              onClick={() => setScrollValue(-1700)}
              >
                <MdChevronLeft className='text-lg text-white' />
              </motion.div>
              <motion.div whileTap={{scale : 0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer
              transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'
              onClick={() => setScrollValue(1900)}
              >
                  <MdChevronRight className='text-lg text-white' />
              </motion.div>
          </div>
        </div>
        <RowContainer 
        scrollValue={scrollValue}
        flag={true}  />
      </section>

        <MenuContainer/>
        
        {cartShow && (
          <CartContainer />
        )}

    </div>
  )
}

export default HomeContainer2