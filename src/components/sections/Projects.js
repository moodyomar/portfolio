import React from 'react';

import '../styles/Projects.css';
import '../styles/ProjectCard.css';
import Project from '../common/Project';
import Splitter from '../common/Splitter';

import projects from '../../data/projects.json'


const Projects = () => {

  return (

    <div className='Projects'>

      {projects.slice(0,3).map(project => {
  let {intro,title,content,btnclass,btn,icon,flip,pId,link,more} = project
        return(
          <div key={pId}>
          <Project key={pId} intro={intro} title={title} content={content} btnClass={btnclass} btn={btn} icon={icon} id={pId} flip={flip} link={link} more={more} />
          <Splitter/>
          </div>
        )
      })}


      <div className="viewall" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <button id="vAll" style={vAllBtn}>View All</button>
      </div>

    </div>

  )
}

const vAllBtn = {
  width:'120px',
  height:'45px',
  border:'none',
  borderRadius:'10px',
  cursor:'pointer'
}

export default Projects