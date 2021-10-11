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
          para={"Lots of motivation, Consistency, Positive energy and responsibility with great passion. I'm definitely a team player, Very eager to learn new technologies and always strives beyond the sky. Experience working with Wordpress, owner of an active e-commerce store and a small Branding Agency offering business promotions as a side hustle."}
          btn={'Download CV'}
          link={'https://www.linkedin.com/in/moodyomar/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAC9cRksBw_oW8mDFpsR1eT7819vRIVStggQ,1635466576525)/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BQHzCPNvQScOhDmpG90WVOQ%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-featured_item_detail_view'} />

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