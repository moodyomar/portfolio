import React from 'react';
import '../styles/SkillCard.css';
import { SiVisualstudiocode,SiCodesandbox,SiCodeship,SiLeetcode } from 'react-icons/si';

const SkillCard = ({icon,title,desc,direction}) => { 

return(

<div className='SkillCard' data-aos={`fade-${direction}`}>
<div className="skillIcon">{icon === 'SiVisualstudiocode' && <SiVisualstudiocode/> || icon === 'SiCodesandbox' && <SiCodesandbox/> || icon === 'SiCodeship' && <SiCodeship/> || icon === 'SiLeetcode' && <SiLeetcode/> }</div>
<div className="skillTitle">{title}</div>
<div className="skillDesc">{desc}</div>
</div>

)
}

export default SkillCard