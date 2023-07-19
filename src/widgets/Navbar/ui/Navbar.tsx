import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cl from './Navbar.module.scss'

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className} : NavbarProps) => {
  return (
    <div className={classNames(cl.navbar, {}, [className])}>
      <div className={cl.links}>
        <Link to={'/'} className={cl.mainLink}>Home</Link>
        <Link to={'/about'}>About</Link>
      </div>
    </div>
  );
};

