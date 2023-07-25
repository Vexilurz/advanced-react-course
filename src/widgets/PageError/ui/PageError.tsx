import { classNames } from 'shared/lib/classNames/classNames'
import cl from './PageError.module.scss'
import { useTranslation } from 'react-i18next'

interface PageErrorProps {
  className?: string
  error?: Error
}

export const PageError =
  ({ className, error }: PageErrorProps): JSX.Element => {
    const { t } = useTranslation()

    const reloadPage = (): void => {
      location.reload()
    }

    return (
      <div className={classNames(cl.pageError, {}, [className])}>
        <p>{t('Uncaught error occurred')}</p>
        <p>{error?.name}{': '}{error?.message}</p>
        <button onClick={reloadPage}>
          {t('Reload page')}
        </button>
      </div>
    )
  }
