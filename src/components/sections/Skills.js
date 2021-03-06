import React from 'react';


import SkillCard from '../common/SkillCard';
import skills from '../../data/skills.json';
import Para from '../common/Para';

import cv from '../../assets/CV-Moody-omar.pdf'
import '../styles/Skills.css';


const Skills = () => {

  return (

    <div className='Skills'>
      <div className="right-col">
        <Para
          intro={'My Skills'}
          title={'Why Hire Me For Next Project?'}
          para={"Lots of motivation, Consistency, Positive energy and responsibility with great passion. I'm definitely a team player, Very eager to learn new technologies and always strives beyond the sky. Experience working with Wordpress, owner of an active e-commerce store and a small Branding Agency offering business promotions as a side hustle."}
          btn={'Download CV'}
          more={cv} />

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