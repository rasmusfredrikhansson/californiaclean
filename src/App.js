import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
// import Top from './components/Top'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next'
import TheCalendar from './components/TheCalendar'


import Aos from 'aos'
import "aos/dist/aos.css"

import pic1 from './img/pic1.jpg'
import pic2 from './img/pic2.jpg'
import pic3 from './img/pic3.jpg'
import pic4 from './img/pic4.jpg'
import pic5 from './img/pic5.jpg'
import pic6 from './img/pic6.jpg'
import pic7 from './img/pic7.jpg'

const App = () => {

  const [calendarOpen, setcalendarOpen] = useState(false) 
  const [time, setTime] = useState() 
  const [sideDrawerOpen, setsideDrawerOpen] = useState(false)  

  let contactFormClassses = [ 'contact-form' ]

  const drawerToggleClickHandler = () => {
    setsideDrawerOpen((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  const backdropClickHandler = () => {
    setsideDrawerOpen(false)
    setcalendarOpen(false)
    // Also close the contact form when user clicks elsewhere
  }

  
  let backdrop
  if (sideDrawerOpen || calendarOpen) {
    backdrop = <Backdrop click={backdropClickHandler}/>
  }

  // Initialize scroll animations
  useEffect(() => {
    Aos.init({
      
    })
  }, []);  
  
  const openCalendar = (value) => {
    setcalendarOpen(open => !open)    
  }

  const { t, i18n } = useTranslation()

  return (
    <div>
      {/* <Top /> */}
      <Navbar drawerClickHandler={drawerToggleClickHandler}/>
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}   

      <div className="top">

        <div className="bookingContainer">
        
          <div className="intro-message"><h1>{t('Try.1')}<br/>{t('Try.2')}<i>{t('Try.25')}</i></h1>
          
            <div>
              <p style={{ fontSize: '16px'}}>{t('Try.4')}</p>
            </div>
            <div>
              <button className="bookNow" onClick={ openCalendar }>{t('Try.5')}</button><h2>{t('Try.3')}</h2>
            </div>
          </div>

          <TheCalendar show={calendarOpen} />


        </div>
           
      </div>

      <div id="hemstadning" className="flexBox">
        <div className="box1 "></div>
        <div className="content-box1" data-aos="fade-right">
          <h2>{t('WhyHomeCleaning.1')}</h2>
          <p>{t('WhyHomeCleaning.2')}</p></div>
        <div className="box3"></div>
        <div className="background-box1 background1">
          <img src={pic1} alt="" />
        </div>    
      </div>

      <div className="flexBox2">        
        <div>
          <h2>{t('Pricing.1')}</h2>               
          <h1>{t('Pricing.2')}</h1>
          <p>{t('Pricing.3')}</p>
        </div>       
      </div>  

      <div id="veckostadning" className="flexBox">
        <div className="background-box2 background6">
          <img src={pic6} alt="" />
        </div>
        <div className="box6"></div>
        <div className="content-box2" data-aos="fade-right">
          <h2>{t('RegularCleaning.1')}</h2>
          <p>{t('RegularCleaning.2')}</p>
          <p className="smallprint">{t('RegularCleaning.3')}</p>   
        </div>
        <div className="box8"></div>
      </div>       

      <div id="stadprofil" className="flexBox">
        <div className="box1"></div>
        <div className="content-box1" data-aos="fade-right">
          <h2>{t('Enjoy.1')}</h2>
          <p>{t('Enjoy.2')}</p>
          <p className="smallprint">{t('Enjoy.3')}</p>   
        </div>
        <div className="box3"></div>
        <div className="background-box1 background3">
          <img src={pic3} alt="" />
        </div>    
      </div>     
      
      
      <div id="tjanster" className="flexBox">
        <div className="background-box2 background2">
          <img src={pic2} alt="" />
        </div>
        <div className="box6"></div>
        <div className="content-box2" data-aos="fade-right">
          <h2>{t('Services.1')}</h2>
          <p>{t('Services.2')}</p> 
          {/* <p className="smallprint">{t('Services.3')}</p>    */}
        </div>
        <div className="box8"></div>
      </div>

      <div className="flexBox2">
        <div className="flexSpacer"></div>
        <div>
          <h2>{t('HowitWorks.1')}</h2>
          <p>{t('HowitWorks.2')}</p>
        </div>
        <div className="flexSpacer"></div>
      </div>     

      <div id="comfortwith" className="flexBox">
        <div className="box1"></div>
        <div className="content-box1" data-aos="fade-right">
          <h2>{t('ComfortWith.1')}</h2>
          <ul>                        
            <li>{t('ComfortWith.2')}</li>
            <li>{t('ComfortWith.3')}</li>
            <li>{t('ComfortWith.4')}</li>
            <li>{t('ComfortWith.5')}</li>
            <li>{t('ComfortWith.6')}</li>
        </ul>
        </div>
        <div className="box3"></div>
        <div className="background-box1 background4">
          <img src={pic4} alt="" />
        </div>    
      </div>

      
      
      <div id="personal" className="flexBox">
        <div className="background-box2 background7">
          <img src={pic7} alt="" />
        </div>
        <div className="box6"></div>
        <div className="content-box2" data-aos="fade-right">
          <h2>{t('Work.1')}</h2>
          <p>{t('Work.2')}</p>   
        </div>
        <div className="box8"></div>
      </div> 

      <div id="omoss" className="flexBox">
        <div className="box1"></div>
        <div className="content-box1" data-aos="fade-right">
          <h2>{t('About.1')}</h2>
          <p>{t('About.2')}</p>   
        </div>
        <div className="box3"></div>
        <div className="background-box1 background5">
          <img src={pic5} alt="" />
        </div>    
      </div>

      
      

      
      <h1 style={{ fontSize: "36px", paddingLeft: "40px", paddingTop: "60px", marginLeft: "15px" }}>{t('Included.01')}</h1>
      <div className="flexBox4" style={{ marginBottom: "80px" }}>
        <div className="flexSpacer20"></div>
        <ul>
          <h2>{t('Included.10')}</h2>
          <li>{t('Included.11')}</li>
          <li>{t('Included.12')}</li>
          <li>{t('Included.13')}</li>                            
          <li>{t('Included.14')}</li>
          <li>{t('Included.15')}</li>
          <li>{t('Included.16')}</li>
          <li>{t('Included.17')}</li>                            
          <li>{t('Included.18')}</li>
      </ul>

      <ul>
          <h2>{t('Included.20')}</h2>
          <li>{t('Included.21')}</li>
          <li>{t('Included.22')}</li>
          <li>{t('Included.23')}</li>
          <li>{t('Included.24')}</li>
          <li>{t('Included.25')}</li>
          <li>{t('Included.26')}</li>
          <li>{t('Included.27')}</li>
          <li>{t('Included.28')}</li>
      </ul>

      <ul>
          <h2>{t('Included.30')}</h2>
          <li>{t('Included.31')}</li>
          <li>{t('Included.32')}</li>
          <li>{t('Included.33')}</li>
          <li>{t('Included.34')}</li>                            
          <li>{t('Included.35')}</li>
          <li>{t('Included.36')}</li>
          <li>{t('Included.37')}</li>                       
          <li>{t('Included.38')}</li>
      </ul>                    

      <ul className="sExtras">
          <h2>{t('Included.40')}</h2>
          <h3>{t('Included.41')}</h3>
          <li>{t('Included.42')}</li>
          <li>{t('Included.43')}</li>                        
          <li>{t('Included.44')}</li> 
          <li>{t('Included.45')}</li>                 
      </ul>
      <div className="flexSpacer20"></div>
    </div>
      
      <Footer />
      
    </div>
  ) 
}

export default App;
