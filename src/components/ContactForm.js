import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Thankyou from './Thankyou';
import { userInfo } from 'os';
import { isEnumSymbolBody } from '@babel/types';

const ContactForm = (props) => {
  const [formClose, setFormClose] = useState(false);
  const [thankyouOpen, setThankyouOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false)

  let contactFormClassses = ['contact-form']

  if (props.show) {
    contactFormClassses = ['contact-form open']
  }
  if (formClose) {
    contactFormClassses = ['contact-form']
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w881ah5', 'template_oxrg84a', e.target, 'user_IvPDcCwFV9Mmqlfzd7OSD')

      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  const openThankyouNote = () => {
    setIsSubmitted(true);

    if (isSubmitted == true) {
      setFormClose(true)
      setThankyouOpen(true)
      setTimeout(() => {
        setThankyouOpen(false)
        props.parentCallback(false)
      }, 2000);
    } else {
      console.log("The form is not send")
    };
  }

  return (
    <div>
      <div className={contactFormClassses}>
        <form onSubmit={sendEmail} >
          <input className="input-box" type="text" placeholder="Full name" name="full_name" required ></input>  
          <input className="input-box" type="hidden" name="date" value={props.contactDate}  ></input>
          <input className="input-box" type="hidden" name="time" value={props.contactTime} ></input>
          <input className="input-box" type="tel" placeholder="Telephone" name="telephone" required></input>
          <input className="input-box" type="email" placeholder="Email address" name="email_adress" required ></input>
          <input className="input-box" type="text" placeholder="Address" name="adress" required ></input>
          <input className="input-box" type="text" placeholder="Postadress" name="postadress" required></input>
          <input className="send-form" type="submit" onClick={openThankyouNote} value="Book Now" required ></input>
        </form>
      </div>
      <Thankyou show={thankyouOpen} />
    </div>
  )
}

export default ContactForm
