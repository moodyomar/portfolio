import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineMenu,AiFillPhone,AiFillLayout  } from 'react-icons/ai';
import themeSwitcher from '../../utils/themeSwitcher';


import '../styles/Navbar.css';


const Navbar = () => { 

const scrollTo = (id) => {
  let scrollToId = document.querySelector(`#${id}`);
  let y = scrollToId.offsetTop - scrollToId.offsetHeight;
  window.scrollTo({top:y,behavior: 'smooth'})
}

return(

<div className='Navbar'>
<div className="logo"  data-aos="fade-right" data-aos-duration="600">
  <h2><img alt="Logo" /></h2>
</div>
<nav>
<ul>
  <li className="underline home"><Link to="/">
    <AiFillHome /> Home</Link></li>
  <li className="underline"><Link to="/portfolio"><AiFillLayout/> Portfolio</Link></li>
  <li onClick={() => scrollTo('contact')} className="underline contact"><AiFillPhone/> Contact</li>
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

export default Navbar