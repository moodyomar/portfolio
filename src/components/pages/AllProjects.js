import React, { useState } from 'react';
import Project from '../common/Project';
import Splitter from '../common/Splitter';

import projects from '../../data/projects.json'
import Para from '../common/Para';
import '../styles/AllProjects.css';


const AllProjects = () => { 

let all = [...new Set(projects.map(project => project.cat))];
let [category,setCategory] = useState('')

const onCategoryChange = (cat) => {
  console.log('cat => ',cat,'category => ',category);
  setCategory(cat)
  console.log('cat => ',cat,'category => ',category);
}

return(

<div className='Projects'>

<div className="container">
<Para title={'All Projects'} btnClass={''} para={'All Projects have their open source on github which can be simply review when clicking read more on each project.'} />
</div>

<div style={filterProjects} >
  <div style={filterProjects.bar} className="bar" >
  {all.map(cat => (
    <div key={cat} onClick={() => onCategoryChange(cat)} style={filterProjects.cat} className={`cat ${category === cat && cat}`} >{cat}</div>
  ))}
  </div>
</div>

      {projects
      .filter(project => !category ? projects : project.cat === category)
      .map(project => {
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

const filterProjects = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '50px',
  bar:{
    width: '65vw',
    height: '50px',
    display: 'flex',
    borderRadius: '150px',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cat:{
    display: 'flex',
    alignItems: 'center',
    transition: '.3s all',
    cursor: 'pointer',
  }
}

export default AllProjects