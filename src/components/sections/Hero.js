import React from 'react';

import '../styles/Hero.css';

const Hero = () => { 

return(

<div className='Hero'>
<div className="left-col">
  <p>--Introduction</p>
  <h1>Hello<br/> <span>I'm Moody<br/>Omar</span></h1>
  <p className="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt accusantium et voluptas minus delectus saepe asperiores. Est voluptatem quisquam quidem, doloribus blanditiis odit.</p>
  <div className="btn">Contact Me</div>
</div>
<div className="right-col">
<div className="ring" style={{backgroundImage:'url(assets/ring.svg)'}}></div>
<div className="person" style={{backgroundImage:'url(assets/personme.png)'}}></div>
<div className="icon icon1">Ai</div>
<div className="icon icon2">Id</div>
<div className="icon icon3">Ps</div>
<div className="icon icon4">Xd</div>
</div>
</div>

)
}

export default Hero