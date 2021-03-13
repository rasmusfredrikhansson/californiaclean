import React from 'react'

const ContactForm = (props) => {
  let contactFormClassses = [ 'contact-form' ]
  
  if (props.show) {
      contactFormClassses = ['contact-form open']
  }
  
  const bookSuccessfully = (event) => {
    event.preventDefault();
    console.log("Selected date => ", props.contactDate, props.contactTime)
  }


  return (
      <div className={contactFormClassses}>
          <h2></h2>
          <form>
            <input className="input-box" type="text" placeholder="Full name"></input>            
            <input className="input-box" type="tel" placeholder="Telephone"></input>
            <input className="input-box" type="email" placeholder="Email address"></input>
            <input className="input-box" type="text" placeholder="Address"></input>
            <input className="input-box" type="text" placeholder="Postadress"></input>
            <button className="send-form" onClick={bookSuccessfully}>Book Now</button>         
          </form>       
           
        </div>    
  )
}

export default ContactForm
