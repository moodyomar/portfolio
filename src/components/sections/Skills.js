import React from 'react';
import SkillCard from '../cards/SkillCard';
import skills from '../../data/skills.json';
import '../styles/Skills.css';


const Skills = () => { 

return(

<div className='Skills'>
<p data-aos="fade-down" data-aos-duration="2000">--Introduction</p>
        <h2 data-aos="fade-down" data-aos-duration="2000">Why Hire Me For Next Project?</h2>
        <p className="para" data-aos="fade-up" data-aos-duration="2200">The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
  {skills.map(skill => (
<SkillCard icon={skill.icon} title={skill.title}
 desc={skill.desc} direction={skill.animation} />
  ))}
</div>

)
}

export default Skills