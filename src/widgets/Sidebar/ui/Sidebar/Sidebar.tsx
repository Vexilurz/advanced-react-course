import {classNames} from "shared/lib/classNames/classNames";
import cl from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className} : SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      className={classNames(cl.sidebar, {[cl.collapsed]: collapsed}, [className])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cl.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cl.lang}/>
      </div>
    </div>
  );
};
