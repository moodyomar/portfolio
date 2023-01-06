import React from 'react';
import {Link} from "react-router-dom";
import Project from '../common/Project';
import Splitter from '../common/Splitter';
import '../styles/Projects.css';
import '../styles/ProjectCard.css';
import projects from '../../data/projects.json'


const Projects = () => {

  return (

    <div className='Projects'>

      {projects.slice(4,10).filter(project => project.cat !== 'Wordpress').map(project => {
  let {intro,title,tools,content,btnclass,btn,icon,flip,pId,link,more} = project
        return(
          <div key={pId}>
          <Project key={pId} intro={intro} title={title} tools={tools} content={content} btnClass={btnclass} btn={btn} icon={icon} id={pId} flip={flip} link={link} more={more} />
          <Splitter/>
          </div>
        )
      })}


      <div className="viewall" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
       <Link to="/portfolio"><button id="vAll" style={vAllBtn}>View All</button></Link>
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