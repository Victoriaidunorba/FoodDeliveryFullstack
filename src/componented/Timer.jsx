import React from 'react'
import './Timer.css'
const Timer = ({onClose, open}) => {
    if(!open) return null

    setTimeout (
        function open(event) {
            document.querySelector(".popup").style.display="block";

        },5000
    )   
  return (
    <div className='popup' onClick={onClose}>
        <div onClick={(e) => {
            e.stopPropagation()
        }}>
        <button onClick={onClose} className='btnOutline'>
            &times;
        </button>
        <h2>Newsletter</h2>
        <p>sign up to out Newsletter today and get latest information on pricing and skin careidajpgnpaj aja</p>
        </div>
    </div>
  )
}

export default Timer