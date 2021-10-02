import React from 'react';
import '../styles/SkillCard.css';


const SkillCard = ({icon,title,desc}) => { 

return(

<div className='SkillCard'>
<div className="skillIcon">{icon}</div>
<div className="skillTitle">{title}</div>
<div className="skillDesc">{desc}</div>
</div>

)
}

export default SkillCard