import React, {useEffect} from 'react'
import './Email.css'
import emailjs from 'emailjs-com'
import EmailResults from './EmailResults'
import { useTranslation } from 'react-i18next'



const Email = () => {  

  const { t, i18n } = useTranslation()

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
        {t('Contact.1')}
      </div>
      <div className="email_message2">
        We will help you
      </div>
      <div className="email_message3">
        Leave your name, number, square meters and choose services. We'll get back to you within 2 hours.
      </div>
      <form onSubmit={sendEmail}>
        <input type="text" placeholder="Your Name" name="name" required></input>
        <input type="text" placeholder="Your Telephone" name="telephone" required></input>
        <input type="text" placeholder="Your Square Meters" name="area" required></input>   
        
        <div className="email_options">
          <div>
            <input type="checkbox" name="varstadning" value="Varstadning"/>
            <label htmlFor="varstadning">Spring Cleaning / Deep Cleaning</label>
          </div>

          <div>
            <input type="checkbox" name="regelbunden" value="Regular Cleaning"/>
            <label htmlFor="regelbunden">Regular Cleaning</label>
          </div>          

          <div>
            <input type="checkbox" name="fonsterputs" value="Windows Wash"/>
            <label htmlFor="fonsterputs">Windows Washing</label>
          </div>

          <div>
            <input type="checkbox" name="tvattstryk" value="Laundry"/>
            <label htmlFor="tvattstryk">Ironing / Laundry</label>
          </div>

          <div>
            <input type="checkbox" name="ugn" value="Inside Oven"/>
            <label htmlFor="ugn">Inside Oven</label>
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
