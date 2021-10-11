import React from 'react';
import {Link} from "react-router-dom";

const Para = ({ intro, title, h1, para, btnClass = 'btn', btn, icon = false,link=null }) => {

  return (

    <>
    
{intro &&       <p><i class="fa fa-long-arrow-right" aria-hidden="true"></i>

{intro}</p>}
      {title ?
        <h2 data-aos="fade-up" data-aos-duration="1000">{title}</h2> : h1}
      <p className="para" data-aos="fade-up" data-aos-duration="2000">{para}</p>
      <div className={btnClass} data-aos="fade-up" data-aos-duration="2000">
        {icon &&
      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>}
        <Link to={{ pathname: `${link}` }} target="_blank">{btn}</Link></div>
    </>

  )
}

export default Para