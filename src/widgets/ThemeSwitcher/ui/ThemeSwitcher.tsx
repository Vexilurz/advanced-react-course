import {classNames} from "shared/lib/classNames/classNames";
import cl from './ThemeSwitcher.module.scss'
import React from "react";
import {useTheme} from "app/providers/ThemeProvider";

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
      TOGGLE THEME
    </button>
  );
};
