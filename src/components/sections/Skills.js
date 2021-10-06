import React from 'react';


import SkillCard from '../cards/SkillCard';
import skills from '../../data/skills.json';
import '../styles/Skills.css';
import Para from '../common/Para';


const Skills = () => {

  return (

    <div className='Skills'>
      <div className="right-col">
        <Para
          intro={'My Skills'}
          title={'Why Hire Me For Next Project?'}
          para={"The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."}
          btn={'Download CV'} />

      </div>
      <div className="left-col">
        {skills.map(skill => (
          <SkillCard key={skill.title} icon={skill.icon} title={skill.title}
            desc={skill.desc} direction={skill.animation} />
        ))}
      </div>
    </div>

  )
}

export default Skills