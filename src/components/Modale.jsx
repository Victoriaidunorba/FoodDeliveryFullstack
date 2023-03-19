import React, {useState} from 'react'
import {useEffect} from 'react'
import Modals from './Modals'
import './Modals.css'

const Modale = () => {
  
    const [openModal, setOpenModal] = useState(true)
  return (
    <div>
        <button className='modalBtn' onClick={() => setOpenModal(true)}>Modal</button>
        <Modals open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  )
}

export default Modale