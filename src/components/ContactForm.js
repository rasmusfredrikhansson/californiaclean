import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Thankyou from './Thankyou';



const ContactForm = (props) => {
  const [formClose, setFormClose] = useState(false);
  const [thankyouOpen, setThankyouOpen] = useState(false);

  

  let contactFormClassses = ['contact-form']
  if (props.show) {
    contactFormClassses = ['contact-form open']
  }
  if (formClose)  {
    contactFormClassses = ['contact-form ']

  }

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Selected date => ", props.contactDate, props.contactTime);


    emailjs.sendForm('contact_service', 'california_contact_form', e.target, 'user_IvPDcCwFV9Mmqlfzd7OSD')


      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  const openThankyouNote = () => {
    setFormClose(true)
    setThankyouOpen(true)
    setTimeout(() => {
      setThankyouOpen(false)
      // setBackdropClose
    }, 2000);
  }


  return (
    <div>
      <div className={contactFormClassses}>
          
      <form onSubmit={sendEmail}>
        <input className="input-box" type="text" placeholder="Full name" name="full_name" ></input>  
        <input className="input-box" type="hidden" name="date" value={props.contactDate}></input>
        <input className="input-box" type="hidden" name="time" value={props.contactTime}></input>
        <input className="input-box" type="tel" placeholder="Telephone" name="telephone" ></input>
        <input className="input-box" type="email" placeholder="Email address" name="email_adress" ></input>
        <input className="input-box" type="text" placeholder="Address" name="adress" ></input>
        <input className="input-box" type="text" placeholder="Postadress" name="postadress" ></input>
        <input className="send-form" type="submit" onClick={openThankyouNote} value="Book Now" ></input>   
        </form>       
        </div>
      <Thankyou show={thankyouOpen} />
        </div>    
  )
}

export default ContactForm
