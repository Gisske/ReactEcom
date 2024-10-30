import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/product_40.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>สินค้าที่ดีมีแค่ที่นี้เท่านั้น</h2>
            <div className="hero-hand-icon">
                <p>สินค้ามากมาย</p>
            </div>
            <p>สำหรับนักศึกษา</p>
            <p>ที่ดีทุกคน</p>
            <div className="hero-latest-btn">
                <div>เลือกดูสินค้า</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero
