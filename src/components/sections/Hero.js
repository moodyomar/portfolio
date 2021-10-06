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
      customAos('pushLeftIcons', '.bLeft', -90)
      customAos('pushLeftIcons', '.tLeft', -90)
      customAos('pushRightIcons', '.bRight', -90)
      customAos('pushRightIcons', '.tRight', -90)
    }
  }, [])

  const heading = <h1 data-aos="fade-down" data-aos-duration="2000">Hello<br /> <span>I'm Moody<br />Omar</span></h1>

  return (

    <div className='Hero'>
      <div className="left-col">
        <Para
          intro={'Introduction'}
          h1={heading}
          para={"The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone."}
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