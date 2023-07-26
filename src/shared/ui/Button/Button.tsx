import { classNames } from 'shared/lib/classNames/classNames'
import cl from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  DEFAULT = 'default'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.DEFAULT,
    ...otherProps
  } = props

  return (
    <button
      type="button"
      className={classNames(cl.button, {}, [className, cl[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
