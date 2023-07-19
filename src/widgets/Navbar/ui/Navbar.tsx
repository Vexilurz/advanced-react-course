import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cl from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className} : NavbarProps) => {
  return (
    <div className={classNames(cl.navbar, {}, [className])}>
      <div className={cl.links}>
        <AppLink to={'/'} className={cl.mainLink}>Home</AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </div>
    </div>
  );
};

