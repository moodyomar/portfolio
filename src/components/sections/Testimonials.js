import React from 'react';
import Project from '../common/Project';
import Square from '../common/Square';


import '../styles/Testimonials.css'


const Testimonials = () => { 

return(

<div className='Testimonials'>

<div id="bar" style={bar}>
  <Square brT={100} brL={100} num={15+'+'} text={'Happy Clients'}
  dir={'right'} />
  <Square num={17+'+'} text={'Projects Done'} dir={'left'} />
  <Square num={50+'+'} text={'Github Repos'} dir={'right'} />
  <Square brB={100} brR={100} num={2+'+'} text={'Years Experince'}
  dir={'left'} />
</div>

<div className="qoutes" style={{padding:'0px 150px'}}>
<Project title={"“Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.”"} content={"― George Bernard Shaw"} id={'bernard'} />
</div>

<div id="contact" className="contact" style={contactCard}>
  <h2>Lets Work Together</h2>
  <p>I'm currently searching for a MERN / Front-end / Full Stack position, Nevertheless I'm always open for contributions in open source projects or even build your own project from zero.</p>
  <button className="btn"><a href="mailto:contact@devmoody.com">Contact Me</a></button>
</div>

</div>

)
}

const bar = {
  display:'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  height: '300px',
  width:'1240px', 
  marginBottom:'100px'
}
const contactCard = {
  textAlign:'center',
  width: '65vw',
  height: '350px',
  display: 'flex',
  flexDirection: 'column',
  justifContent:' center',
  alignItems: 'center',
  margin: '50px 0px',
  padding: '45px',
borderRadius: '50px',
}
export default Testimonials