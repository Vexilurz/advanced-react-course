import {classNames} from "shared/lib/classNames/classNames";
import cl from './ThemeSwitcher.module.scss'
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className} : ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <button
      className={classNames(cl.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK
        ? <DarkIcon />
        : <LightIcon />
      }
    </button>
  );
};
