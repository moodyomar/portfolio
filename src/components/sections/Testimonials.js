import React from 'react';
import Project from '../common/Project';
import Square from '../common/Square';


import '../styles/Testimonials.css'


const Testimonials = () => { 

return(

<div className='Testimonials'>

<div id="bar" style={bar}>
  <Square brT={50} brL={40} num={56} text={'Happy Clients'}
  dir={'right'} />
  <Square num={12} text={'Projects Done'} dir={'left'} />
  <Square num={36} text={'Github Repos'} dir={'right'} />
  <Square brB={50} brR={40} num={1} text={'Years Experince'}
  dir={'left'} />
</div>

<div className="qoutes" style={{padding:'0px 100px'}}>
<Project title={"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"} content={"― Bernard M. Baruch"} id={'bernard'} />
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

export default Testimonials