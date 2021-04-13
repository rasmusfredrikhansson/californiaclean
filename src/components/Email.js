import React, {useEffect} from 'react'
import './Email.css'
import emailjs from 'emailjs-com'
import EmailResults from './EmailResults'

const Email = () => {  

  const [showResults, setShowResults] = React.useState(false)

  const sendEmail = (e) => {
    e.preventDefault();   
    
    emailjs.sendForm('service_w881ah5', 'template_oxrg84a', e.target, 'user_IvPDcCwFV9Mmqlfzd7OSD')
  
      .then((result) => {
        console.log(result.text);
        setShowResults(true)
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
    
  }


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
            <label for="varstadning">Vanlig städning</label>
          </div>

          <div>
            <input type="checkbox" name="regelbunden" value="Regular Cleaning"/>
            <label for="regelbunden">Regelbunden städning</label>
          </div>

          <div>
            <input type="checkbox" name="storstadning" value="Deep Cleaning"/>
            <label for="storstadning">Storstädning</label>
          </div>

          <div>
            <input type="checkbox" name="fonsterputs" value="Windows Wash"/>
            <label for="fonsterputs">Fönsterputs</label>
          </div>

          <div>
            <input type="checkbox" name="tvattstryk" value="Laundry"/>
            <label for="tvattstryk">Tvätt / Stryk</label>
          </div>

          <div>
            <input type="checkbox" name="ugn" value="Inside Oven"/>
            <label for="ugn">Insida Ugn</label>
          </div>         
        </div>

        <br/>

        { showResults ? <EmailResults /> : null }

        {/* <textarea rows="4" placeholder="Meddelande"></textarea> */}
        <button type="submit">Skicka meddelande</button>
      </form>
    </div>
  )
}

export default Email
