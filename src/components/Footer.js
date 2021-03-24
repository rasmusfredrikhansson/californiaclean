import React from 'react'
import footer_logo from '../img/footer_logo.png'
import drop from '../img/drop.png'
import './Footer.css'
import { useTranslation } from 'react-i18next'

const Footer = props => {
  const { t, i18n } = useTranslation()
  return (
    <footer>
      <div className="footer">
        <div className="spacer"></div>
        <ul className="services">
          <li className="services-headline"><h3>{t('FooterServices.1')}<img className="drop" src={drop} /></h3></li>
          <li>{t('FooterServices.2')}</li>
          <li>{t('FooterServices.3')}</li>
          <li>{t('FooterServices.4')}</li>
          <li>{t('FooterServices.5')}</li>
          <li>{t('FooterServices.6')}</li>
          {/* <li>{t('FooterServices.7')}</li> */}
          <li>{t('FooterServices.8')}</li>
        </ul>

        <div className="footer-logo"><img src={footer_logo} /></div>
        <ul className="contact">
          <li><h3>{t('FooterServices.9')}</h3></li>
          
          <li><i className="fas fa-map-marker-alt"></i>Högklintsvägen 4</li>
          <li>167 37 Bromma</li>
          <li style={{marginTop: '30px'}}><i className="fas fa-phone-alt"></i><a href="tel:0728692123"><strong style={{ fontSize: '19px'}}>072-869 21 23</strong></a></li>
          <li style={{marginTop: '0px', marginBottom: '15px' }}><a className="mailto" href="mailto:hellocaliforniaclean@gmail.com"><span><strong>hello</strong>californiaclean</span>@gmail.com</a></li>
          <li style={{marginTop: '31px'}}>© <strong>2021 California Clean</strong></li>
        </ul>
        <div className="spacer"></div>
      </div>
    </footer> 
  )
}

export default Footer
