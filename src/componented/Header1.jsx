import React, { useState, Component } from 'react'
import ReactSearchBox from "react-search-box";
import { motion } from "framer-motion"
import { Link, useNavigate, BrowserRouter } from 'react-router-dom'
import './Container.css'
import './Header.css'

import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPhoneNumber, signInWithPopup } from "firebase/auth";
import { app } from '../firebase.config';

import Logo from '../img/ph5.png'
import Avatar from '../img/avatar.png'

import { BsSearch } from "react-icons/bs"
import { CgShoppingCart } from "react-icons/cg"
import { MdAdd, MdLogout} from "react-icons/md"
import { BsBag } from "react-icons/bs"
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./discover")
  }
          const firebaseAuth = getAuth(app);
          const provider = new GoogleAuthProvider();

          const [{user}, dispatch] = useStateValue();

          const [isMenu,setIsMenu] = useState(false);
          const [cartShow] = useStateValue();
      const login = async () => {
       if(!user) {
        const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
        dispatch({
          type : actionType.SET_USER,
          user : providerData[0],
        });
        localStorage.setItem("user", JSON.stringify(providerData[0]))
       } else{
         setIsMenu(!isMenu);
       }
      }

      const logout = () => {
        setIsMenu(false)
        localStorage.clear()

        dispatch({
          type: actionType.SET_USER,
          user: null,
        })
      };

      const showCart = () => {
        dispatch({
          type: actionType.SET_CART_SHOW,
          cartShow: !cartShow,
        })
      }
    
  return (

    <header className='  50  w-screen p-3 px-4 md:p-6 md:px-16 '>
        {/* desktops and tablets */}

        <div className='flex'>
            <motion.ul 
            initial={{opacity : 0, x : 200}} 
            animate={{opacity : 1, x : 0}}
            exit={{opacity : 0, x : 200}} 
            className='unique'> 
                
                <li className='un une text-base text-white hover:text-white  duration-100 transition-all cursor-pointer ease-in-out px-32 font-bold'>UNIQUE SKIN</li>
                <li className='un deux text-base text-white hover:text-white  duration-100 transition-all cursor-pointer ease-in-out px-32 font-bold'>UNIQUE BABY</li>
                <li className='un trois text-base text-white hover:text-white  duration-100 transition-all cursor-pointer ease-in-out px-32 bg-primary2 font-bold'>UNIQUE LIP</li>
                <li className='un quarte text-base text-white hover:text-white  duration-100 transition-all cursor-pointer ease-in-out px-32 bg-primary3 font-bold'>UNIQUE HAIR</li>
                <li className='un cinq text-base text-white hover:text-white  duration-100 transition-all cursor-pointer ease-in-out px-32 bg-primary4 font-bold'>UNIQUE BALM</li>
                
            </motion.ul>
            </div>

        <div className='hidden md:flex w-full h-full items-center justify-between'>
            <Link to={"/"} className='flex items-center gap-2'>
                <img src={Logo} alt="" className='object-cover  logo' />
               
            </Link>
            

            <div className='flex items-center gap-8 fixed main'>
            <motion.ul 
            initial={{opacity : 0, x : 200}} 
            animate={{opacity : 1, x : 0}}
            exit={{opacity : 0, x : 200}} 
            className='flex items-center gap-8 ulx'> 
                <li className='text-base hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out cool'>SKIN</li>
                <Link to="/hair">
                <li className='text-base hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out cool'>HAIR</li></Link>
               
                <Link to={'/discoverus'}>
                  <li className='text-base hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out cool'>DISCOVER</li></Link>
                <li className='text-base hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out cool'>STORES</li>
                <div className="searchcontainer"><li><input type="text" placeholder="Search.." name="search"/>
                <button type="submit" class="search"><BsSearch/></button></li></div>
            </motion.ul>

            

            <motion.div whileTap={{scale : 0.6}}
            className='relative flex items-center justify-center ulx ulx1'
            onClick={() => showCart(false)}
            >
              <BsBag className='text-textColor text-2xl cursor-pointer' />
              <div className='absolute -top-4 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                <p className='text-xs text-white font-semibold'>2</p>
              </div>
            </motion.div>

            <div className='relative ulx ulx2'> 
            <motion.img
            whileTap={{ scale : 0.6 }}
            src={user ? user.photoURL : Avatar} 
            alt="userprofile"
            onClick={login}
            className='w-10 min-w-[40px] h-10 min-h-[40px] shadow-xl cursor-pointer rounded-full' />

           {
            isMenu && (
              <motion.div 
                initial={{opacity : 0, scale : 0.6}}
                animate={{opacity : 1, scale : 1}}
                exit={{opacity : 0, scale : 0.6}} 
                className='flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-13 right-2 w-40'>
              {
                user && user.email === "mrcoretheonlineshopper@gmail.com" && (
                  <Link to={'/createItem'}>
                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                  onClick={() => setIsMenu(false)}
                  >
                    New Item <MdAdd/></p>
                  </Link>
                )
              }

              <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
              onClick={logout}
              >Logout <MdLogout/></p>
            </motion.div>
            )
           }
            </div>
            
          </div>
      </div>

          {/* mobile */}
          <div className='flex md:hidden w-full h-full items-center justify-between'>
         
            <div className='relative flex items-center justify-center'
            onClick={showCart}
            >
              <CgShoppingCart className='text-textColor text-2xl cursor-pointer' />
              <div className='absolute -top-3 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                <p className='text-xs text-white font-semibold'>2</p>
              </div>
            </div>

            <Link to={"/"} className='flex items-center gap-2'>
                <img src={Logo} alt="" className='object-cover w-14' />
                <p className='text-headingColor text-x1 font-bold'>ChefLaygurss</p>
            </Link>

            <div className='relatvie'> 
            <motion.img
            whileTap={{ scale : 0.6 }}
            src={user ? user.photoURL : Avatar} 
            alt="userprofile"
            onClick={login}
            className='w-10 min-w-[40px] h-10 min-h-[40px] shadow-xl cursor-pointer rounded-full' />

           {
            isMenu && (
              <motion.div 
                initial={{opacity : 0, scale : 0.6}}
                animate={{opacity : 1, scale : 1}}
                exit={{opacity : 0, scale : 0.6}} 
                className='flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-13 right-2 w-40'>
              {
                user && user.email === "mrcoretheonlineshopper@gmail.com" && (
                  <Link to={'/createItem'}>
                    <p className='flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd/></p>
                  </Link>
                )
              }

            <ul className='flex flex-col'> 
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out hover:bg-slate-100 px-4 py-2'
                onClick={() => setIsMenu(false)}>Home</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out hover:bg-slate-100 px-4 py-2'
                onClick={() => setIsMenu(false)}>Menu</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out hover:bg-slate-100 px-4 py-2'
                onClick={() => setIsMenu(false)}>About Us</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out hover:bg-slate-100 px-4 py-2'
                onClick={() => setIsMenu(false)}>Service</li>
            </ul>

              <p className='m-2 p-2 rounded-md shadow-md flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base bg-gray-200' 
              onClick={logout}
              >Logout <MdLogout/></p>
            </motion.div>
            )
           }
            </div>
          </div>
    </header>

  )
}

export default Header