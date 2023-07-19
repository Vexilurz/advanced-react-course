import {classNames} from "shared/lib/classNames/classNames";
import cl from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cl.button, {}, [className, cl[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
