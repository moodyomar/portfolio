import React, { useEffect, useState } from 'react';
import Project from '../common/Project';
import Splitter from '../common/Splitter';
import projects from '../../data/projects.json'
import Para from '../common/Para';
import '../styles/AllProjects.css';


const AllProjects = () => { 

let all = [...new Set(projects.map(project => project.cat))];
let [category,setCategory] = useState('')
let [sorting,setSorting] = useState({
  a:1,
  b:-1
})

const sortBy = (a,b) => Number(a.intro.replace( /^\D+/g, '')) < Number(b.intro.replace( /^\D+/g, '')) ? sorting.a : sorting.b

const onCategoryChange = (cat) => {
  setCategory(cat)
}

  useEffect(() => {
    console.log(sorting);
},[sorting])

return(

<div className='Projects'>

<div className="titleWraper">
<Para title={'All Projects'} btnClass={''} para={'All Projects have their open source on github which can be simply review when clicking read more on each project.'} />
</div>

<div style={filterProjects} >
  <div style={filterProjects.bar} className="bar" >
  {all.map(cat => (
    <div key={cat} onClick={() => onCategoryChange(cat)} style={filterProjects.cat} className={`cat ${category === cat && cat}`} >{cat}</div>
  ))}
  </div>
</div>

<div style={sort} >
<div style={{display:'flex',gap:'5px'}}>
<button  className={`btn x s${sorting.a}`} onClick={() => setSorting({a:1,b:-1})}>Newest</button>
  <button className={`btn x s${sorting.b}`} onClick={() => setSorting({a:-1,b:1})}>Oldest</button>
</div>
</div>

      {projects
      .filter(project => !category ? projects : project.cat === category)
      .sort((a,b) => sortBy(a,b))
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
  marginBottom: '25px',
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

const sort = {
  margin: '0px auto',
  textAlign: 'center',
  marginBottom: '35px',

}

export default AllProjects