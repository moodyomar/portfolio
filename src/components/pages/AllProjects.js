import React from 'react';
import Project from '../common/Project';
import Splitter from '../common/Splitter';

import projects from '../../data/projects.json'


const AllProjects = () => { 

return(

<div className='Projects'>

<Splitter/>

      {projects.map((project,i) => {
  let {intro,title,content,btnclass,btn,icon,flip,pId,link,more} = project
        return(
          <div key={pId}>
          <Project intro={intro} title={title} content={content} btnClass={btnclass} btn={btn} icon={icon} id={pId} flip={flip} link={link} more={more} />
          <Splitter />
          </div>
        )
      })}
</div>

)
}

export default AllProjects