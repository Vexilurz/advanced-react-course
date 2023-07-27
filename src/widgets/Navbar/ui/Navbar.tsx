import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cl from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cl.navbar, {}, [className])}>
      <div className={cl.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cl.mainLink}>
          {t('home')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className=''>
          {t('about')}
        </AppLink>
      </div>
    </div>
  )
}
