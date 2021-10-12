import React from 'react';
import { AiFillInstagram,AiFillFacebook,AiFillLinkedin,
AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import '../styles/Footer.css'


const Footer = () => { 

return(

<div className="Footer" style={footer}>
<div className="logo">
  <h2><img alt="Logo" /></h2>
</div>
<p style={footer.paraFooter}>Please feel free to reach me out on my other social media platforms for any question or request needed.</p>
<div style={footer.socialFooter}>
 <Link to={{ pathname: `https://instagram.com/moodyomarz` }} target="_blank" className="socialIcon"><AiFillInstagram size={25} /></Link>
 <Link to={{ pathname: `https://facebook.com/moodyomarz` }} target="_blank" className="socialIcon"><AiFillFacebook size={25}/></Link>
 <Link to={{ pathname: `https://linkedin.com/in/moodyomar` }} target="_blank" className="socialIcon"><AiFillLinkedin size={25} /></Link>
 <Link to={{ pathname: `https://github.com/moodyomar` }} target="_blank" className="socialIcon"><AiFillGithub size={25}/></Link>
</div>

</div>

)
}

const footer = {
  width:'100vw',
  height:'250px',
  padding:'25px 50px',
  gap:'20px',
  backgroundColor:'#25262a',
  alignItems:'center',
  socialFooter:{
    flex:'2',
    display:'flex',
    justifyContent:'space-evenly',
  },
  paraFooter:{
textAlign:'center',
  }
}

export default Footer