import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.scss';

function NavItem({ text, goTo, children }) {
  return(
    <NavLink to={goTo} className="NavItem">
      { children }
      <span>{text}</span>
    </NavLink>
  );
};


export { NavItem };