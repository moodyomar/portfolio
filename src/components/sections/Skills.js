import React from 'react';
import SkillCard from '../cards/SkillCard';
import skills from '../../data/skills.json';
import '../styles/Skills.css';


const Skills = () => { 

return(

<div className='Skills'>
  {skills.map(skill => (
<SkillCard icon={skill.icon} title={skill.title}
 desc={skill.desc} />
  ))}
</div>

)
}

export default Skills