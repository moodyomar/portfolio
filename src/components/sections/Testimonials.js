import React from 'react';
import Project from '../common/Project';
import Square from '../common/Square';


import '../styles/Testimonials.css'


const Testimonials = () => { 

return(

<div className='Testimonials'>

<div id="bar" style={bar}>
  <Square brT={100} brL={100} num={56} text={'Happy Clients'}
  dir={'right'} />
  <Square num={12} text={'Projects Done'} dir={'left'} />
  <Square num={36} text={'Github Repos'} dir={'right'} />
  <Square brB={100} brR={100} num={1} text={'Years Experince'}
  dir={'left'} />
</div>

<div className="qoutes" style={{padding:'0px 100px'}}>
<Project title={"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"} content={"― Bernard M. Baruch"} id={'bernard'} />
</div>

<div className="contact" style={contactCard}>
  <h2>Lets Work Together</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam nihil eaque soluta porro fuga, labore, obcaecati iusto adipisci quam fugiat vero sit repudiandae fugit.</p>
  <button className="btn">Contact Me</button>
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
  width: '65vw',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifContent:' center',
  alignItems: 'center',
  margin: '50px 0px',
  gap:'30px',
  padding: '40px',
borderRadius: '50px',
}
export default Testimonials