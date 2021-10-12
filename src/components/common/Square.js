import React from 'react';
import '../styles/Testimonials.css'


const Square = ({num,text,brT=0,brR=0,brB=0,brL=0,dir}) => { 

return(

<div id="square" style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width:'300px',
  flexDirection: 'column',
  borderRadius:`${brT}px ${brR}px ${brB}px ${brL}px`
}} data-aos={`fade-${dir}`} data-aos-duration="1000">
<h1>{num}</h1>
<p>{text}</p>
</div>

)
}


export default Square