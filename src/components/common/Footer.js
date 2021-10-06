import React from 'react';
import { AiFillInstagram,AiFillFacebook,AiFillLinkedin,
AiFillGithub } from 'react-icons/ai';


const Footer = () => { 

return(

<div style={footer}>
<div className="logo">
  <h2><img alt="Logo" /></h2>
</div>
<p> </p>
<div style={footer.socialFooter}>
 <div className="id"><AiFillInstagram size={25} /></div>
 <div className="id"><AiFillFacebook size={25}/></div>
 <div className="id"><AiFillLinkedin size={25} /></div>
 <div className="id"><AiFillGithub size={25}/></div>
</div>

</div>

)
}

const footer = {
  width:'100vw',
  height:'150px',
  display:'flex',
  padding:'50px',
  backgroundColor:'#25262a',
  socialFooter:{
    flex:'2',
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
  }
}

export default Footer