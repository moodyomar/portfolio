import React from 'react';
import { SiJavascript,SiReact,SiCss3  } from 'react-icons/si';
import { BiCodeAlt  } from 'react-icons/bi';

import '../styles/Hero.css';

const Hero = () => {

  return (

    <div className='Hero'>
      <div className="left-col">
        <p data-aos="fade-down" data-aos-duration="2000">--Introduction</p>
        <h1 data-aos="fade-down" data-aos-duration="2000">Hello<br /> <span>I'm Moody<br />Omar</span></h1>
        <p className="para" data-aos="fade-up" data-aos-duration="2200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt accusantium et voluptas minus delectus saepe asperiores. Est voluptatem quisquam quidem, doloribus blanditiis odit.</p>
        <div className="btn" data-aos="fade-up" data-aos-duration="2000">Contact Me</div>
      </div>
      <div className="right-col">
        <div className="ring"></div>
        <div className="person" data-aos="fade-up" data-aos-duration="1800"></div>
        <div className="icon bLeft"
        data-aos="zoom-in" data-aos-duration="2100"
        ><SiReact/></div>
        <div className="icon tLeft" 
     data-aos="zoom-in" data-aos-duration="2100"
        ><BiCodeAlt/></div>
        <div className="icon tRight"
       data-aos="zoom-in" data-aos-duration="2100"
        ><SiJavascript/></div>
        <div className="icon bRight"
          data-aos="zoom-in" data-aos-duration="2100"
        ><SiCss3/></div>
      </div>
    </div>

  )
}

export default Hero