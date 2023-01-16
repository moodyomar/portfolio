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
          para={"Lots of motivation, Consistency, Positive energy and responsibility. Able to efficiently self-manage during independent projects, as well as collaborate,  Experience in building basic infra and CI/CD processes from scratch, Building Full stack web applications with branching strategies and more than 40 repositories/projects on Github."}
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