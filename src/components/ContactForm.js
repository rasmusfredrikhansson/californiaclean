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
          <h2>We will be cleaning your home on the : insert time and date here : 28/3/2021 in the morning</h2>
          <form action="">
            <input className="input-box" type="text" placeholder="Full name"></input>            
            <input className="input-box" type="tel" placeholder="Telephone"></input>
            <input className="input-box" type="email" placeholder="Email address"></input>
            <input className="input-box" type="text" placeholder="Address 1"></input>
            <input className="input-box" type="text" placeholder="Postadress"></input>
            <button type="submit" className="send-form">Book Now</button>         
          </form>       
          <button className="send-form" onClick={bookSuccessfully}>Book Now</button> 
        </div>    
  )
}

export default ContactForm
