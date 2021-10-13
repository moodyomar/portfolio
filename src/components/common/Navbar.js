import React, { useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { AiFillHome, AiOutlineMenu,AiFillPhone,AiFillLayout  } from 'react-icons/ai';
import themeSwitcher from '../../utils/themeSwitcher';


import '../styles/Navbar.css';


const Navbar = ({location}) => { 

const history = useHistory();

  useEffect(() => {
  window.scrollTo(0,0)
},[location.pathname])

const scrollTo = (id) => {

  if(location.pathname !== "/"){
  history.push("/")
  return
  }

  let scrollToId = document.querySelector(`#${id}`);
  let y = scrollToId.offsetTop - scrollToId.offsetHeight;
  window.scrollTo({top:y,behavior: 'smooth'})

}


return(

<div style={nav} className='Navbar'>
<div className="logo"  data-aos="fade-right" data-aos-duration="600">
  <Link to="/"><h2><img alt="Logo" /></h2></Link>
</div>
<nav>
<ul>
  <li className="underline home"><Link to="/">
    <AiFillHome /> Home</Link></li>
  <li className="underline"><Link to="/portfolio"><AiFillLayout/> Portfolio</Link></li>
  <li onClick={() => scrollTo('contact')} className="underline contact"><AiFillPhone /> Contact</li>
</ul>
</nav>
<div className="navSetting">
  <div onClick={themeSwitcher} className="themeSwitcher"><div className="theme-switch-wrapper">
    <label className="theme-switch"       htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round"></div>
  </label>
</div></div>
  <AiOutlineMenu size={25} className="burgerMenu" />
  <div className="btn hide-m"
  data-aos="fade-left" data-aos-duration="2000" 
  >Contact Me</div>
</div>
</div>

)
}

const nav = {
display: 'flex',
width: '100vw',
height: '100px',
padding: '25px',
alignItems: 'center',
paddingLeft: '40px',
}

export default Navbar