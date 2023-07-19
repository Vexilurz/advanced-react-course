import React from 'react';
import {Link} from "react-router-dom";
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter />
    </div>
  );
};

export default App;