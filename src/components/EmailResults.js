import React from 'react'
import { useTranslation } from 'react-i18next'
import './EmailResults.css'

const EmailResults = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className="email_results">
      {t('Email.1')}<br/>
      {t('Email.2')}

    </div>
  )
}

export default EmailResults
