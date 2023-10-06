import React from 'react'
import './Herosection.css'
import Hero_img from '../../../assets/hero_img(1).png'
const Herosection = () => {
  return (
    <>
      <section className='hero_sections'>
        <div className='hero_main'>
          <div className='hero_content'>
            <h1 className="hero_title">Up your skills
              to advance your career path</h1>
            <p>Provides you with the latest online learning system and material that help your knowledge growing.</p>
            <div className="hero_btn">
              <button>Get Started</button>
              <button>Check out</button>
            </div>
          </div>
          <div className='hero_img_container'>
            <div className='hero_img'>
              <div className='circle_blue'></div>
            <img src={Hero_img} alt="hero_img" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Herosection