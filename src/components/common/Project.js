import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../cards/ProjectCard';
import Para from './Para';


const Project = ({ intro, title, content, btnClass='', btn, icon, flip = false, id ,link='maportfolioo'}) => {

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
      <Link to={{ pathname: `https://${link}.netlify.app` }} target="_blank" className={`left-col ${flip && 'flipToRight'}`}>
        <ProjectCard id={id} />
      </Link>
    </div>

  )
}

export default Project