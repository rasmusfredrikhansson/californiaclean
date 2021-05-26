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
        setShowResults(true);
        setTimeout(function(){ setShowResults(false); }, 8000);        
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
      {t('Contact.2')}
      </div>
      <div className="email_message3">
        {t('Contact.3')}
      </div>
      <form onSubmit={sendEmail}>
        <input type="text" placeholder={t('Contact.4')} name="name" required></input>
        <input type="text" placeholder={t('Contact.5')} name="telephone" required></input>
        <input type="text" placeholder={t('Contact.6')} name="area" required></input>   
        
        <div className="email_options">
        <div style={{marginBottom: "5px", marginLeft: "10px"}}>
          <small style={{color: "grey"}}>{t('Contact.15')}</small>
        </div>

        <div>
            <input type="checkbox" name="varstadning" value="First-Time Spring Cleaning"/>
            <label htmlFor="varstadning"> <strong>{t('Contact.7')}</strong></label>
          </div>  

          <div>
            <input type="checkbox" name="home" value="One-Time Home Cleaning"/>
            <label htmlFor="home"> <strong>{t('Contact.8')}</strong></label>
          </div> 

          <div>
            <input type="checkbox" name="window" value="Window Wash"/>
            <label htmlFor="window"> <strong>{t('Contact.9')}</strong></label>
          </div>

          <div>
            <input type="checkbox" name="move" value="Move-In & Out Cleaning"/>
            <label htmlFor="move"> <strong>{t('Contact.10')}</strong></label>
          </div>     

          <div>
            <input type="checkbox" name="viewing" value="Viewing Cleaning"/>
            <label htmlFor="viewing"> <strong>{t('Contact.18')}</strong></label>
          </div>               

          <div>
            <input type="checkbox" name="construction" value="After Construction Cleaning"/>
            <label htmlFor="construction"> <strong>{t('Contact.11')}</strong></label>
          </div>          

          <div>
            <input type="checkbox" name="business" value="Small Business Cleaning"/>
            <label htmlFor="business"> <strong>{t('Contact.13')}</strong></label>
          </div>

          

        </div>

        <br/>

        { showResults ? <EmailResults /> : null }

        {/* <textarea rows="4" placeholder="Meddelande"></textarea> */}
        <button type="submit">{t('Contact.14')}</button>
      </form>
    </div>
  )
}

export default Email
