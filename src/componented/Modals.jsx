import React from 'react'
import nft from "../img/skins.png"
import './Modals.css'

const Modals = ({open, onClose}) => {
    if(!open) return null
  return (
    <div onClick={onClose} className='overlay'>
        <div onClick={(e) => {
            e.stopPropagation()
        }} className="modalContainer">
            <img className='image' src={nft} alt="" />
            <div className="modalRight">
                <p onClick={onClose} className="closeBtn">X</p>
                <div className="content">
                    <p className='firstp'>Do you want a  <span className='class'>$20 CREDIT</span> </p>
                   
                    <p className='secondp'>for your first trade?</p>
                </div>
                <div className="btnContainer">
                    <button className="btnPrimary">
                        <span className="bold">YES</span>, I'd love that
                    </button>
                    <button className="btnOutline">
                        <span onClick={onClose} className="bold">NO</span>, thanks
                    </button>y
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modals