import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';


const Navbar = () => { 

const switchIt = () => {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }    
}

  
  toggleSwitch.addEventListener('change', switchTheme, false);
  
  
}

return(

<div className='Navbar'>
<div className="logo">
  <h2><img src="/assets/logo.svg" alt="" /></h2>
</div>
<nav>
<ul>
  <li className="underline"><Link to="/">
    Home</Link></li>
  <li className="underline"><Link to="/portfolio">Portfolio</Link></li>
  <li className="underline"><Link to="/contact">Contact</Link></li>
</ul>
</nav>
<div className="navSetting">
  <div onClick={switchIt} className="themeSwitcher"><div class="theme-switch-wrapper">
    <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
  </label>
</div></div>
  <div className="btn ">Contact Me</div>
</div>
</div>

)
}

export default Navbar