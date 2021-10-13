import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AiFillHome, AiOutlineMenu, AiFillPhone, AiFillLayout, AiOutlineWhatsApp } from 'react-icons/ai';
import themeSwitcher from '../../utils/themeSwitcher';


import '../styles/Navbar.css';


const Navbar = ({ location }) => {

  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const scrollTo = (id) => {

    if (location.pathname !== "/") {
      history.push("/")
      return
    }

    let scrollToId = document.querySelector(`#${id}`);
    let y = scrollToId.offsetTop - scrollToId.offsetHeight;
    window.scrollTo({ top: y, behavior: 'smooth' })

  }


  return (

    <div style={nav} className='Navbar'>
      <div className="logo" data-aos="fade-right" data-aos-duration="600">
        <NavLink to="/"><h2><img alt="Logo" /></h2></NavLink>
      </div>
      <nav>
        <ul>
          <li className="underline home">
            <NavLink exact to="/" activeClassName="active"><AiFillHome /> Home</NavLink></li>
          <li className="underline">
            <NavLink exact to="/portfolio" activeClassName="active"><AiFillLayout /> Portfolio</NavLink></li>
          <li onClick={() => scrollTo('contact')} className="underline contact"><AiFillPhone /> Contact</li>
        </ul>
      </nav>
      <div className="navSetting">
        <div onClick={themeSwitcher} className="themeSwitcher"><div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
          </label>
        </div>
        </div>
        <AiOutlineMenu size={25} className="burgerMenu" />
        <NavLink style={{ textDecoration: 'none' }}
          to={{ pathname: `https://wa.link/u8q8zv` }} target="_blank">
          <div className="btn hide-m"
            data-aos="fade-left" data-aos-duration="2000"
          >Message Me</div></NavLink>
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