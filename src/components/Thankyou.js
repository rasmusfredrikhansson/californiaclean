
import React from 'react'
import { useTranslation } from 'react-i18next'

import { useState, useEffect } from 'react'

import './Thankyou.css'

const Thankyou = (props) => {
  const { t, i18n } = useTranslation()

  let thankyouNoteClasses = ['thankyou']
  if (props.show) {
    thankyouNoteClasses = ['thankyou open']
  }

  return (
    <div className={thankyouNoteClasses}>
      <div>{t('ThankYou.1')}</div>
      <div style={{lineHeight: "1.9rem", marginTop: "40px"}}>{t('ThankYou.2')}</div>
    </div>
  )
}

export default Thankyou;
