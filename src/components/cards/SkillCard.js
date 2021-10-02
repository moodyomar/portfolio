import React from 'react';
import '../styles/SkillCard.css';


const SkillCard = ({icon,title,desc,direction}) => { 

return(

<div className='SkillCard' data-aos={`fade-${direction}`}>
<div className="skillIcon">{icon}</div>
<div className="skillTitle">{title}</div>
<div className="skillDesc">{desc}</div>
</div>

)
}

export default SkillCard