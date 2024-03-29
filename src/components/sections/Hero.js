import React, { useEffect } from 'react';
import { SiReact, SiCss3,SiHtml5 } from 'react-icons/si';
import {IoLogoJavascript } from 'react-icons/io';
import { customAos } from '../../utils/customAos';

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
          para={"I’m a creative and highly motivated Web Developer & DevOps engineer with a great experience in design and the e-commerce world that is deeply passionate about ‏everything related to computers and tech since forever."}
          btnClass={'btn'}
          btn={'Contact Me'} 
          more={'mailto:contact@devmoody.com'}/>
      </div>
      <div className="right-col">
        <div className="ring"></div>
        <div className="person" data-aos="fade-up" data-aos-duration="1800"></div>
        <div className="icon bLeft" 
          data-aos="zoom-in" data-aos-duration="2100"
        ><SiReact /></div>
        <div className="icon tLeft" 
          data-aos="zoom-in" data-aos-duration="2100"
        ><SiHtml5 /></div>
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