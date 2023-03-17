import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  let active_color = navData => navData.isActive ? s.active : s.item;
    return (
      <nav className={s.nav}>
      <div className={s.item}>  
        <NavLink exact to={'/profile'} className = { active_color }>
        Profile
        </NavLink>     
      </div>
      <div className={s.item} >
        <NavLink to={'/dialogs'} className = { active_color }>
        messeges
        </NavLink>     
      </div>
      <div className={s.item}>
        <NavLink to={'/news'} className = {active_color}>
        news
        </NavLink>     
      </div>
      <div className={s.item}>
        <NavLink to={'/music'} className = {active_color}>
        music
        </NavLink>     
      </div>
      <div className={s.item}>
        <NavLink to={'/settings'} className = { active_color}>
        Settings
        </NavLink>     
      </div>
    </nav>
    );
}

export default Navbar;