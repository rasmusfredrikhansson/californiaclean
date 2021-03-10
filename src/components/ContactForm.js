import React from 'react'

const ContactForm = (props) => {
  let contactFormClassses = [ 'contact-form' ]
  
if (props.show) {
    contactFormClassses = ['contact-form open']
}
  
  const bookSuccessfully = (event) => {
    event.preventDefault();
    console.log("Selected date => ", props.contactDate)
  }


  return (
      <div className={contactFormClassses}>
          <h2>We will be cleaning your home on the</h2>
          <form action="">
            <input className="input-box" type="text" placeholder="First name"></input>
            <input className="input-box" type="text" placeholder="Last name"></input>
            <input className="input-box" type="email" placeholder="Email address"></input>
            <input className="input-box" type="text" placeholder="Address 1"></input>
            <input className="input-box" type="text" placeholder="Address 2"></input>        
      </form>
       <button className="send-form" onClick={bookSuccessfully}>Book Now</button> 
        </div>
    
  )
}

export default ContactForm
