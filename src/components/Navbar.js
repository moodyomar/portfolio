import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineMenu,AiFillPhone,AiFillLayout  } from 'react-icons/ai';

import './styles/Navbar.css';


const Navbar = () => { 

const switchIt = () => {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); 
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); 
    }    
}

  
  toggleSwitch.addEventListener('change', switchTheme, false);
  
}

return(

<div className='Navbar'>
<div className="logo"  data-aos="fade-right" data-aos-duration="600">
  <h2><img alt="" /></h2>
</div>
<nav>
<ul>
  <li className="underline home"><Link to="/">
    <AiFillHome/> Home</Link></li>
  <li className="underline"><Link to="/portfolio"><AiFillLayout/> Portfolio</Link></li>
  <li className="underline contact"><Link to="/contact"><AiFillPhone/> Contact</Link></li>
</ul>
</nav>
<div className="navSetting">
  <div onClick={switchIt} className="themeSwitcher"><div class="theme-switch-wrapper">
    <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
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