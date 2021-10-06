import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import Para from './Para';


const Project = ({ intro, title, content, btnClass, btn, icon, flip = false, id }) => {

  return (

    <div className="Project">
      <div className="right-col">
        <Para
          intro={intro}
          title={title}
          para={content}
          btnClass={btnClass}
          btn={btn} icon={icon} />

      </div>
      <div className={`left-col ${flip && 'flipToRight'}`}>
        <ProjectCard id={id} />
      </div>
    </div>

  )
}

export default Project