import React, { useEffect } from 'react';
import { SiReact, SiCss3 } from 'react-icons/si';
import {IoLogoJavascript } from 'react-icons/io';
import { customAos } from '../../utils/customAos';

import { BiCodeAlt } from 'react-icons/bi';

import '../styles/Hero.css';
import Para from '../common/Para';

const Hero = () => {

  useEffect(() => {
    if (window.visualViewport.width > 600) {
      customAos('pushLeftIcons', '.bLeft', -30)
      customAos('pushLeftIcons', '.tLeft', -30)
      customAos('pushRightIcons', '.bRight', -70)
      customAos('pushRightIcons', '.tRight', -70)
    }
  }, [])

  const heading = <h1 data-aos="fade-down" data-aos-duration="2000">Hello<br /> <span>I'm Moody<br />Omar</span></h1>

  return (

    <div className='Hero'>
      <div className="left-col">
        <Para
          intro={'Introduction'}
          h1={heading}
          para={"I’m a creative Web Developer with a great experience in design and some experience in the e-commerce world with a deep passion for ‏everything related to computers and tech since forever."}
          btnClass={'btn'}
          btn={'Contact Me'} />
      </div>
      <div className="right-col">
        <div className="ring"></div>
        <div className="person" data-aos="fade-up" data-aos-duration="1800"></div>
        <div className="icon bLeft" 
          data-aos="zoom-in" data-aos-duration="2100"
        ><SiReact /></div>
        <div className="icon tLeft" 
          data-aos="zoom-in" data-aos-duration="2100"
        ><BiCodeAlt /></div>
        <div className="icon tRight" 
          data-aos="zoom-in" data-aos-duration="2100"
        ><IoLogoJavascript /></div>
        <div className="icon bRight" 
          data-aos="zoom-in" data-aos-duration="2100"
        ><SiCss3 /></div>
      </div>
    </div>

  )
}


export default Hero