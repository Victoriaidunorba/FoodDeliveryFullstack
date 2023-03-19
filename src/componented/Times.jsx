import React from 'react'
import Timer from './Timer'
import './Timer.css'

const Times = () => {
    const [openTimer, setOpenTimer] = useState(true)
  return (
    <div>
    <button className='modalBtn' onClick={() => setOpenTimer(true)}>Modal</button>
    <Timer opens={openTimer} onClose={() => setOpenTimer(false)} />
    </div>
  )
}

export default Times