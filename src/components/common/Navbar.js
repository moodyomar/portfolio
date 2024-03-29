import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AiFillHome, AiOutlineMenu, AiFillPhone, AiFillLayout,AiOutlineArrowUp } from 'react-icons/ai';
import { FaWhatsapp,FaMoon,FaSun } from 'react-icons/fa';
import themeSwitcher from '../../utils/themeSwitcher';


import '../styles/Navbar.css';


const Navbar = ({ location }) => {

  const history = useHistory();
  let [mobileMenu,toggleMobileMenu] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
    toggleMobileMenu(false);
  }, [location.pathname])

  const scrollTo = (id) => {

    if (location.pathname !== "/") {
      history.push("/")
      return
    }

    let scrollToId = document.querySelector(`#${id}`);
    let y = scrollToId.offsetTop - scrollToId.offsetHeight;
    window.scrollTo({ top: y})

  }


  return (

    <div style={nav} className='Navbar'>
      <div className="scrollUp" style={nav.scrollUp}
      onClick={() => window.scrollTo(0,0)}><AiOutlineArrowUp size={25} /></div>
      <div className="logo" id="logo" data-aos="fade-right" data-aos-duration="1000">
        <NavLink to="/"><img alt="Logo" /></NavLink>
      </div>
      <nav>
        <ul className={`${mobileMenu && 'toggleMobileMenu'}`}>
          <li className="underline home">
            <NavLink exact to="/" activeClassName="active"><AiFillHome /> Home</NavLink></li>
          <li className="underline">
            <NavLink exact to="/portfolio" activeClassName="active"><AiFillLayout /> Portfolio</NavLink></li>
          <li onClick={() => scrollTo('contact')} className="underline contact"><AiFillPhone /> Contact</li>
        </ul>
      </nav>
      <div className="navSetting">
        <div onClick={themeSwitcher} className="themeSwitcher"><div className="theme-switch-wrapper">
          <FaMoon/>
          <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
          </label>
            <FaSun/>
        </div>
        </div>
        <AiOutlineMenu onClick={() => toggleMobileMenu(!mobileMenu)} size={25} 
        className='burgerMenu' />
        <NavLink style={{ textDecoration: 'none' }}
          to={{ pathname: `https://wa.link/u8q8zv` }} target="_blank">
          <div style={{display:'flex',justifyContent:'center'}} className="btn hide-m"
            data-aos="fade-left" data-aos-duration="2000"
          ><FaWhatsapp style={{marginRight:'5px'}} size={20}/>Say Hello</div></NavLink>
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
  scrollUp:{
    display:'grid',
    placeItems:'center',
    width:'40px',
    height:'40px',
    borderRadius:'50%',
    position:'fixed',
    bottom:'15px',
    right:'15px',
    opacity: '0.4',
  transition: '.25s ease-out',
  zIndex: '1000',
  cursor:'pointer',
  }
}

export default Navbar