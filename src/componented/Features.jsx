import React from 'react'
import './Container.css'
import Baby from "../img/skins.png"
import Cruelty from "../img/cruelty.jpg"
import Vegan from "../img/vegan.jpg"
import Clean from "../img/clean.jpg"
import Recycle from "../img/recycle.jpg"
import Organic from "../img/organic.jpg"
import './Slideshow.css'
import Background from './Background'
const Features = () => {
  return (
    <div>
    <div className='' id='feature'>
    <div className="feature-box">
    <img src={Clean} alt=""/>
    <div className="button">
  <div className="textContainer">
    <span className="sampleText">Clean</span>
    <div className="cube cube-1">
      <div className="face front"><span>Clean</span></div>
      <div className="face back"><span>Clean</span></div>
    </div>
    <div className="cube cube-2">
      <div className="face front"><span>Clean</span></div>
      <div className="face back"><span>Clean</span></div>
    </div>
    <div className="cube cube-3">
      <div className="face front"><span>Clean</span></div>
      <div className="face back"><span>Clean</span></div>
    </div>
    <div className="cube cube-4">
      <div className="face front"><span>Clean</span></div>
      <div className="face back"><span>Clean</span></div>
    </div>
  </div>
</div>
      </div>

      <div className="feature-box">
      <img src={Vegan} alt="" />     
  <div className="button green">
  <div className="textContainer">
    <span className="sampleText">Vegan</span>
    <div className="cube cube-1">
      <div className="face front"><span>Vegan</span></div>
      <div className="face back"><span>Vegan</span></div>
    </div>
    <div className="cube cube-2">
      <div className="face front"><span>Vegan</span></div>
      <div className="face back"><span>Vegan</span></div>
    </div>
    <div className="cube cube-3">
      <div className="face front"><span>Vegan</span></div>
      <div className="face back"><span>Vegan</span></div>
    </div>
    <div className="cube cube-4">
      <div className="face front"><span>Vegan</span></div>
      <div className="face back"><span>Vegan</span></div>
    </div>
  </div>
</div>
      </div>

      <div className="feature-box">
      <img src={Cruelty} alt="" />
      <div className="button red">
  <div className="textContainer">
    <span className="sampleText">Cruelty Free</span>
    <div className="cube cube-1">
      <div className="face front"><span>Cruelty Free</span></div>
      <div className="face back"><span>Cruelty Free</span></div>
    </div>
    <div className="cube cube-2">
      <div className="face front"><span>Cruelty Free</span></div>
      <div className="face back"><span>Cruelty Free</span></div>
    </div>
    <div className="cube cube-3">
      <div className="face front"><span>Cruelty Free</span></div>
      <div className="face back"><span>Cruelty Free</span></div>
    </div>
    <div className="cube cube-4">
      <div className="face front"><span>Cruelty Free</span></div>
      <div className="face back"><span>Cruelty Free</span></div>
    </div>
  </div>
</div>
      </div>

      <div className="feature-box">
      <img src={Organic} alt="" />
      <div className="button greens">
  <div className="textContainer">
    <span className="sampleText">Organic</span>
    <div className="cube cube-1">
      <div className="face front"><span>Organic</span></div>
      <div className="face back"><span>Organic</span></div>
    </div>
    <div className="cube cube-2">
      <div className="face front"><span>Organic</span></div>
      <div className="face back"><span>Organic</span></div>
    </div>
    <div className="cube cube-3">
      <div className="face front"><span>Organic</span></div>
      <div className="face back"><span>Organic</span></div>
    </div>
    <div className="cube cube-4">
      <div className="face front"><span>Organic</span></div>
      <div className="face back"><span>Organic</span></div>
    </div>
  </div>
</div>
      </div>

      <div className="feature-box">
      <img src={Recycle} alt="" />
          <div className="button purplish">
  <div className="textContainer">
    <span className="sampleText">Recyclable</span>
    <div className="cube cube-1">
      <div className="face front"><span>Recyclable</span></div>
      <div className="face back"><span>Recyclable</span></div>
    </div>
    <div className="cube cube-2">
      <div className="face front"><span>Recyclable</span></div>
      <div className="face back"><span>Recyclable</span></div>
    </div>
    <div className="cube cube-3">
      <div className="face front"><span>Recyclable</span></div>
      <div className="face back"><span>Recyclable</span></div>
    </div>
    <div className="cube cube-4">
      <div className="face front"><span>Recyclable</span></div>
      <div className="face back"><span>Recyclable</span></div>
    </div>
  </div>
</div>
      </div>

   






      



    </div>
    <Background/>
    </div>
  )
}

export default Features