import { classNames } from 'shared/lib/classNames/classNames'
import cl from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

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
        <Button onClick={reloadPage}>
          {t('Reload page')}
        </Button>
      </div>
    )
  }
