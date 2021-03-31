import React from 'react'
import emailjs from 'emailjs-com';

const ContactForm = (props) => {
  
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
  
  let contactFormClassses = ['contact-form']
    
  if (props.show) {
      contactFormClassses = ['contact-form open']
  }

  return (
      <div className={contactFormClassses}>
          
      <form onSubmit={sendEmail}>
        <input className="input-box" type="text" placeholder="Full name" name="full_name" required></input>  
        <input className="input-box" type="hidden" name="date" value={props.contactDate}></input>
        <input className="input-box" type="hidden" name="time" value={props.contactTime}></input>
        <input className="input-box" type="tel" placeholder="Telephone" name="telephone" required></input>
        <input className="input-box" type="email" placeholder="Email address" name="email_adress" required></input>
        <input className="input-box" type="text" placeholder="Address" name="adress" required></input>
        <input className="input-box" type="text" placeholder="Postadress" name="postadress" required></input>
        <input className="send-form" type="submit" value="Book Now" required></input>   
      </form>       
           
        </div>    
  )
}

export default ContactForm
