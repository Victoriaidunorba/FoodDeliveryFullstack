import React from 'react'
import nft from "../img/drinks.png"
import './Modals.css'

const Modals = ({open, onClose}) => {
    if(!open) return null
  return (
    <div onClick={onClose} className='overlay hidden lg:flex md:hidden wide'>
        <div onClick={(e) => {
            e.stopPropagation()
        }} className="modalContainer">
            <img className='image' src={nft} alt="" />
            <div className="modalRight">
                <p onClick={onClose} className="closeBtn">X</p>
                <div className="content">
                    {/* <p className='secondp'>Cravings Anyone?</p>
                    <p className='firstp'>Order Burgers from <span className='class'>$20</span> </p> */}

                    <p className='secondp'>Fruit Juice anyone?</p>
                    <p className='firstp'>Order a bottle starting from<span className='class'> $10</span> </p>
                   
                    <p className='secondp'>Taste the freshness!</p>
                </div>
                <div className="btnContainer">
                    <button className="btnPrimary">
                        <span className="bold">YES</span>, I'd love that
                    </button>
                    <button className="btnOutline">
                        <span onClick={onClose} className="bold">NO</span>, thanks
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modals