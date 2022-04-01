import React from "react";
import { NavItem } from "@atoms/NavItem/NavItem";

import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <div></div>
      <ul className="NavBar">
        <div className="NavBar-links">
          <NavItem text="Home" goTo="/" />
        </div>
        <div className="NavBar-links">
          <NavItem text="About" goTo="/" />
        </div>
        <div className="NavBar-links">
          <NavItem text="Proyects" goTo="/" />
        </div>
      </ul>
    </header>
  );
}

export { Header };
