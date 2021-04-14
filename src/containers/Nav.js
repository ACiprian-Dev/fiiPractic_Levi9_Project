import React from "react";
import {NavLink} from 'react-router-dom'

const navItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "" },
  { title: "Products", url: "/Products" },
  { title: "Articles", url: "/articles/" },
  { title: "Counter", url: "/Counter" }
];

const Nav = () => {
  const generateNavList = () =>
    navItems.map((item, index) => (
      <div className="navItem" key={item.title}>
        <NavLink to={item.url}> {item.title} </NavLink>
      </div>
    ));

  return <div className="navigationElement">{generateNavList()}</div>;
};

export default Nav;
