import React from 'react';
import '../styles/SkillCard.css';
import { FaTools,FaReact,FaCode } from 'react-icons/fa';
import { MdDevicesOther, } from 'react-icons/md';

const SkillCard = ({icon,title,desc,direction}) => { 

return(

<div className='SkillCard' style={sCard} data-aos={`fade-${direction}`} data-aos-duration="1000">
<div className="skillIcon" style={sIcon}>{(icon === 'FaReact' && <FaReact/>) || (icon === 'FaTools' && <FaTools/>) || (icon === 'MdDevicesOther' && <MdDevicesOther/>) || (icon === 'FaCode' && <FaCode/>) }</div>
<div className="skillTitle">{title}</div>
<div className="skillDesc">{desc}</div>
</div>
)
}

const sCard = {
margin: '15px',
width: '300px',
height: '300px',
borderRadius: '15px', 
padding: '30px',
display: 'grid',
placeItems: 'center',
transition: 'all .6s ease-out',
boxShadow: '1px 1px 10px 1px rgba(0,0,0,0.20)',
}
const sIcon = {
  borderRadius: '50%',
  width: '80px',
  height: '80px',
  display: 'grid',
  placeItems: 'center',
  transition: 'all .3s ease',
  fontSize: '2rem',
}

export default SkillCard