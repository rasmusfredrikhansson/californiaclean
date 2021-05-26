import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Thankyou from './Thankyou';
import { userInfo } from 'os';
import { isEnumSymbolBody } from '@babel/types';
import { useTranslation } from 'react-i18next'

const ContactForm = (props) => {
  const { t, i18n } = useTranslation()

  const [formClose, setFormClose] = useState(false);
  const [thankyouOpen, setThankyouOpen] = useState(false);

  let contactFormClassses = ['contact-form']

  if (props.show) {
    contactFormClassses = ['contact-form open']
  }
  if (formClose) {
    contactFormClassses = ['contact-form']
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w881ah5', 'template_x154heo', e.target, 'user_IvPDcCwFV9Mmqlfzd7OSD')

      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()


    setFormClose(true)
    setThankyouOpen(true)
    setTimeout(() => {
      setThankyouOpen(false)
      props.parentCallback(false)
    }, 5000);
  }

  return (
    <div>
      <div className={contactFormClassses}>
        <form onSubmit={sendEmail} >
          <input className="input-box" type="text" placeholder={t('Booking.4')} name="full_name" required="required" />
          <input className="input-box" type="hidden" name="date" value={props.contactDate} />
          <input className="input-box" type="hidden" name="time" value={props.contactTime} />
          <input className="input-box" type="tel" placeholder={t('Booking.5')} name="telephone" required="required" />
          <input className="input-box" type="number" placeholder={t('Booking.6')} name="squaremeters" required="required" />          
            <select placeholder="choose service" name="services">
              <option value={t('Booking.9')}>{t('Booking.9')}</option>
              <option value={t('Booking.10')}>{t('Booking.10')}</option>
              <option value={t('Booking.11')}>{t('Booking.11')}</option>
              <option value={t('Booking.12')}>{t('Booking.12')}</option>
              <option value={t('Booking.13')}>{t('Booking.13')}</option>
              <option value={t('Booking.14')}>{t('Booking.14')}</option>
              <option value={t('Booking.15')}>{t('Booking.15')}</option>             
            </select>
          <input className="input-box" type="text" placeholder={t('Booking.7')} name="adress" required="required" />
          <input className="input-box" type="text" placeholder={t('Booking.8')} name="postadress" required="required" />
          <button className="send-form" type="submit">{t('Booking.3')}</button>
        </form>
      </div>
      <Thankyou show={thankyouOpen} />
    </div>
  )
}

export default ContactForm
