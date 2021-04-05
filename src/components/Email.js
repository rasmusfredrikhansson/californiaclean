import React from 'react'
import './Email.css'
import emailjs from 'emailjs-com'

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


const Email = () => {
  return (
    <div className="email">
      <div className="email_message">
        Ring upp mig
      </div>
      <form onSubmit={sendEmail}>
        <input type="text" placeholder="Namn" name="name"></input>
        <input type="text" placeholder="Telefonnummer" name="telephone"></input>      
        <select name="service">
          <option value="Engångsstädning">Engångsstädning</option>
          <option value="Engångsstädning">Regelbunden städning</option>
        </select>
        <br/>
        {/* <textarea rows="4" placeholder="Meddelande"></textarea> */}
        <button type="submit">Skicka meddelande</button>
      </form>
    </div>
  )
}

export default Email
