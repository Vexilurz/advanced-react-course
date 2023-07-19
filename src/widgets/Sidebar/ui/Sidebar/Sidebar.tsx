import {classNames} from "shared/lib/classNames/classNames";
import cl from './Sidebar.module.scss'
import {useState} from "react";

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
    </div>
  );
};
