import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../common/ProjectCard';
import Para from './Para';


const Project = ({ intro, title,tools, content, btnClass='', btn, icon, flip = false, id ,link='maportfolioo',more}) => {

  return (

    <div className="Project">
      <div className="right-col">
        <Para
          intro={intro}
          title={title}
          tools={tools}
          para={content}
          btnClass={btnClass}
          btn={btn} icon={icon}
          more={more} />

      </div>

      <Link to={{ pathname: link }} target="_blank" className={`left-col ${flip && 'flipToRight'}`}>
        <ProjectCard id={id} />
      </Link>

    </div>

  )
}

export default Project