import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Thankyou from './Thankyou';
import { userInfo } from 'os';
import { isEnumSymbolBody } from '@babel/types';

const ContactForm = (props) => {
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
    }, 2000);
  }

  return (
    <div>
      <div className={contactFormClassses}>
        <form onSubmit={sendEmail} >
          <input className="input-box" type="text" placeholder="Full name" name="full_name" required="required" />
          <input className="input-box" type="hidden" name="date" value={props.contactDate} />
          <input className="input-box" type="hidden" name="time" value={props.contactTime} />
          <input className="input-box" type="tel" placeholder="Telephone" name="telephone" required="required" />
          <input className="input-box" type="email" placeholder="Email address" name="email_adress" required="required" />
          <input className="input-box" type="text" placeholder="Address" name="adress" required="required" />
          <input className="input-box" type="text" placeholder="Postadress" name="postadress" required="required" />
          <input className="send-form" type="submit" value="Book Now" />
        </form>
      </div>
      <Thankyou show={thankyouOpen} />
    </div>
  )
}

export default ContactForm
