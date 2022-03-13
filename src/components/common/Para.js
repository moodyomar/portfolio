import React from 'react';
import {Link} from "react-router-dom";
import { getIcon } from '../../utils/iconsGetter';

const Para = ({ intro, title,tools='', h1, para, btnClass = 'btn', btn, icon = false,more='' }) => {

  return (

    <>
    
{intro &&       <p><i className="fa fa-long-arrow-right" aria-hidden="true"></i>

{intro}</p>}
      {title ?
        <h2 data-aos="fade-up" data-aos-duration="1000">{title}</h2> : h1}
        {tools.length !==0 ? tools.map(tool => 
          <span key={tool} className='toolUsed' data-aos="fade-up" data-aos-duration="1000"> {getIcon(tool)} </span> ): ''}
      <p className="para" data-aos="fade-up" data-aos-duration="2000">{para}</p>
      <div className={btnClass} data-aos="fade-up" data-aos-duration="2000">
        {icon &&
      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>}
        <Link to={{ pathname: `${more}` }} target="_blank">{btn}</Link></div>
    </>

  )
}

export default Para