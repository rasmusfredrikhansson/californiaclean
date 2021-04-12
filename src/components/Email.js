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
        Hör av dig idag
      </div>
      <div className="email_message2">
        Vi hjälper dig!
      </div>
      <div className="email_message3">
        Lämna namn, nummer, kvadratmeter och tjänster så hör vi av oss till dig.
      </div>
      <form onSubmit={sendEmail}>
        <input type="text" placeholder="Namn" name="name" required></input>
        <input type="text" placeholder="Telefonnummer" name="telephone" required></input>
        <input type="text" placeholder="Kvadratmeter" name="area" required></input>   
        
        <div className="email_options">
          <div>
            <input type="checkbox" name="varstadning" value="Varstadning"/>
            <label htmlFor="varstadning">Vanlig städning</label>
          </div>

          <div>
            <input type="checkbox" name="regelbunden" value="Regular Cleaning"/>
            <label htmlFor="regelbunden">Regelbunden städning</label>
          </div>

          <div>
            <input type="checkbox" name="storstadning" value="Deep Cleaning"/>
            <label htmlFor="storstadning">Storstädning</label>
          </div>

          <div>
            <input type="checkbox" name="fonsterputs" value="Windows Wash"/>
            <label htmlFor="fonsterputs">Fönsterputs</label>
          </div>

          <div>
            <input type="checkbox" name="tvattstryk" value="Laundry"/>
            <label htmlFor="tvattstryk">Tvätt / Stryk</label>
          </div>

          <div>
            <input type="checkbox" name="ugn" value="Inside Oven"/>
            <label htmlFor="ugn">Insida Ugn</label>
          </div>         
        </div>

        <br/>
        {/* <textarea rows="4" placeholder="Meddelande"></textarea> */}
        <button type="submit">Skicka meddelande</button>
      </form>
    </div>
  )
}

export default Email
