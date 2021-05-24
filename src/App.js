import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
// import Top from './components/Top'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next'
import TheCalendar from './components/TheCalendar'
import {Link} from 'react-scroll'

import Thankyou from './components/Thankyou'
import Email from './components/Email'


import Aos from 'aos'
import "aos/dist/aos.css"

import pic1 from './img/pic1.jpg'
import pic2 from './img/pic2.jpg'
import pic3 from './img/pic3.jpg'
import pic4 from './img/pic4.jpg'
import pic5 from './img/pic5.jpg'
import pic6 from './img/pic6.jpg'
import pic7 from './img/pic7.jpg'
import pic8 from './img/pic8.jpg'
import pic9 from './img/pic9.jpg'
import pic11 from './img/pic11.jpg'

const App = () => {

  let backdrop

  let callback = (isBackdropOpen) => {
    setBackDropOpen(isBackdropOpen)
    window.location.reload(false);
  }

  const [calendarOpen, setcalendarOpen] = useState(false)
  const [backDropOpen, setBackDropOpen] = useState(true)
  const [time, setTime] = useState()
  const [sideDrawerOpen, setsideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setsideDrawerOpen((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  const backdropClickHandler = () => {
    setsideDrawerOpen(false)
    setcalendarOpen(false)
  }

  if (sideDrawerOpen || calendarOpen) {
    backdrop = <Backdrop click={backdropClickHandler} open={backDropOpen} />
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
      <Navbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}

      <div className="top">       

        <div className="telephone-number">
          <i style={{fontSize: "28px", right: "-7px", top: "8px"}} className="fas fa-phone-alt"></i><a href="tel:0728692123"><h4 style={{position: "relative", top: "5px"}}>{t('Try.3')}</h4></a>
        </div>
        <div className="bookingContainer">          

          <div className="intro-message">
            <h1>{t('Try.1')}</h1>
            <h2>{t('Try.2')}</h2>          

            <div>
              <button className="bookNow" onClick={openCalendar}>{t('Try.5')}</button> 
              <Link to="tjanster" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}><h3>{t('Try.25')}</h3></Link>              
            </div>                  

          </div>
          <TheCalendar show={calendarOpen} click={backdrop} parentCallback={callback} />
        </div>

      </div>

      <div id="hemstadning" className="flexBox">
        <div className="box1"></div>
        <div className="content-box1" data-aos="fade-right">
          <h2>{t('WhyHomeCleaning.1')}</h2>
          <p>{t('WhyHomeCleaning.2')}</p>
          <br />
          <p>{t('WhyHomeCleaning.3')}</p>
        </div>
        <div className="box3"></div>
        <div className="background-box1 background1">
          <img src={pic1} alt="" />
        </div>
      </div>

      <div id="varstadning" className="flexBox">
        <div className="background-box2 background5">
          <img src={pic5} alt="" />
        </div>
        <div className="box6"></div>
        <div className="content-box2" data-aos="fade-right">
          <h2>{t('SpringCleaning.1')}</h2>
          <p>{t('SpringCleaning.2')}</p>
          
          <br />
          <p><strong style={{fontSize: "24px"}}>{t('RegularCleaning.1')}</strong></p>
          <p className="cleaning-schedule"><strong>{t('RegularCleaning.3')}</strong></p>
          <p>{t('RegularCleaning.2')}</p>
          
          
          {/* <p style={{ color: "#6bc32c" }}>{t('SpringCleaning.3')}</p> */}
          {/* <p className="smallprint"><Link to="tjanster" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}><h3>{t('SpringCleaning.4')}</h3></Link></p> */}
        </div>
        <div className="box8"></div>
      </div>


      {/* Business Cleaning */}
      <div id="veckostadning" className="flexBox">
        <div className="box1"></div>
        <div className="content-box1" data-aos="fade-right">
          <h2>{t('BusinessCleaning.1')}</h2>
          <p>{t('RegularCleaning.22')}</p>

          {/* <br/>

          <p className="smallprint"><Link to="businesscleaning" activeClass="active" smooth={true} duration={300} spy={true} offset={-280}><h3 style={{cursor: "pointer"}}>{t('SpringCleaning.4')}</h3></Link></p> */}
          {/* <br />
          <p style={{ color: "#6bc32c" }}>{t('RegularCleaning.3')}</p> */}
        </div>
        <div className="box3"></div>
        <div className="background-box1 background11">
          <img src={pic11} alt="" />
        </div>
      </div>

      <div id="tjanster" className="flexBox5">       

        <div style={{textAlign: "center"}}>  

          <h6>{t('Pricing.39')}</h6>         
          

          {/* Spring Cleaning */}
          <h2 id="springcleaning" style={{marginBottom: "0px", fontSize: "32px", textAlign: "center", color: "#fffd6f"}}>{t('Pricing.1')}</h2>
          
          {/* From 21st June, Change to 135 */}
          <h2 style={{marginTop: "0px", color: "#fffd6f", fontSize: "24px", textAlign: "center", marginBottom: "14px"}}>{t('Pricing.100')}</h2>      
          
          <p>{t('Pricing.25')}</p>  
          
            
          <p>{t('Pricing.3')}</p>                            
          <p>{t('Pricing.2')}</p>          
          <p>{t('Pricing.20')}</p> 
          <p>{t('Pricing.37')}</p>
                             
          <p>{t('Pricing.4')}</p>
          
          
          
          {/* Regular Cleaning */}
          <h2 style={{marginBottom: "0px", fontSize: "32px", textAlign: "center",color: "#fffd6f"}}>{t('Pricing.6')}</h2>
          {/* From 21st June, Change to 215 */}
          <h2 style={{marginTop: "0px", color: "#fffd6f", fontSize: "24px", textAlign: "center", marginBottom: "14px"}}>{t('Pricing.61')}</h2>           
          
          <p>{t('Pricing.18')}</p>    
          <p>{t('Pricing.33')}</p>            
          <p>{t('Pricing.31')}</p>


          {/* Window Washing */}
          <h2 id="windowwash" style={{marginBottom: "0px", fontSize: "32px", textAlign: "center", color: "white"}}>{t('Pricing.35')}</h2>
          <h2 style={{marginTop: "0px", color: "#fffd6f", fontSize: "24px", textAlign: "center", marginBottom: "14px"}}>{t('Pricing.36')}</h2>         
          
          <p>{t('Pricing.38')}</p>
          <p>{t('Pricing.4')}</p>

                
          {/* One Time Home Cleaning */}
          <h2 id="homecleaning" style={{marginBottom: "0px", fontSize: "32px", textAlign: "center", color: "white"}}>{t('Pricing.7')}</h2>
          <h2 style={{marginTop: "0px", color: "#fffd6f", fontSize: "24px", textAlign: "center", marginBottom: "14px"}}>{t('Pricing.77')}</h2>
          <p>{t('Pricing.74')}</p>         
          <p>{t('Pricing.75')}</p>          
          <p>{t('Pricing.37')}</p>
          <p>{t('Pricing.4')}</p>          


          {/* Move In Move Out Cleaning */}
          <h2 id="movingcleaning" style={{marginBottom: "5px", fontSize: "32px", textAlign: "center"}}>{t('Pricing.134')}</h2>
          <h4 style={{textAlign: "center"}}>{t('Pricing.10')}</h4> 
          <h4 style={{textAlign: "center", color: "white"}}>{t('Pricing.32')}</h4>           
          <h2 style={{marginTop: "0px", color: "#fffd6f", fontSize: "24px", textAlign: "center", marginBottom: "14px"}}>{t('Pricing.29')}</h2>
          
          {/* <p><strong>{t('Pricing.73')}</strong> {t('Pricing.72')}</p>                 */}
          
                  
          <p>{t('Pricing.28')}</p>
          <p>{t('Pricing.40')}</p>           
          <p>{t('Pricing.4')}</p>          
          


          {/* One Time Deep Cleaning */}
          {/* <h2>{t('Pricing.8')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('Pricing.88')}</h2>
          <p>{t('Pricing.74')}</p>
          <p><strong>{t('Pricing.73')}</strong> {t('Pricing.72')}</p>
          <p>{t('Pricing.21')}</p>       
          <p style={{ marginBottom: "102px"}}>{t('Pricing.4')}</p>

          <h2>{t('Pricing.9')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('Pricing.99')}</h2>
          <p style={{ marginBottom: "102px"}}>{t('Pricing.4')}</p> */}

          {/* Deep Cleaning */}  
          {/* <div className="cleaning_bundle">                     
            
            <h4>{t('Pricing.10')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('Pricing.101')}</h4>            
          </div>
          
          <p className="margin"><strong>{t('Pricing.73')}</strong> {t('Pricing.72')}</p>          
          <p>{t('Pricing.211')}</p>
          <p>{t('Pricing.4')}</p>          */}

          {/* Weekend Cleaning */}
          {/* <h2 id="special">{t('Pricing.11')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('Pricing.111')}</h2>                   
          
          <p>{t('Pricing.13')}</p>
          <p>{t('Pricing.133')}</p>           
          <p>{t('Pricing.12')}</p> */}

          {/* Business Cleaning */}
          <h2 id="businesscleaning" style={{marginBottom: "0px", fontSize: "32px", textAlign: "center"}}>{t('Pricing.23')}</h2>
          <h2 style={{marginTop: "0px", color: "white", fontSize: "24px", textAlign: "center", marginBottom: "14px"}}>{t('Pricing.22')}</h2>                   
          <p>{t('Pricing.24')}</p>
          <p>{t('Pricing.34')}</p> 
          <p>{t('Pricing.166')}</p> 
          <p>{t('Pricing.4')}</p>         
          
          {/* Spring Cleaning Offer*/}
          {/* <h5>{t('Pricing.14')}</h5>           
          <p>{t('Pricing.16')}</p>
          <p>{t('Pricing.166')}</p>
          <p>{t('Pricing.2')}</p>
          <p>{t('Pricing.15')}</p>
          
          <p>{t('Pricing.17')}</p>
          <p style={{marginBottom: "20px"}}>{t('Pricing.18')}</p> */}
          <p className="rut_deduction">{t('Pricing.19')}</p>

        </div>
      </div>

      {/* <div id="stadprofil" className="flexBox">
        <div className="box1"></div>
        <div className="content-box1" data-aos="fade-right">
          <h2>{t('CleaningProfile.1')}</h2>
          <p>{t('CleaningProfile.2')}</p>
          <br />
          <p style={{ color: "#6bc32c", marginBottom: "10px" }}><i>{t('CleaningProfile.3')}</i></p>
          <p>{t('CleaningProfile.4')}</p><br/>
          <p><small><strong>{t('CleaningProfile.5')} </strong></small>{t('CleaningProfile.6')}</p>
          <p>{t('CleaningProfile.7')}</p>
        </div>
        <div className="box3"></div>
        <div className="background-box1 background3">
          <img src={pic3} alt="" />
        </div>
      </div> */}

      

      {/* CLEANING PROFILE */}
      <div id="stadprofil" className="flexBox">
        <div className="background-box2 background3">
          <img src={pic3} alt="" />
        </div>
        <div className="box6"></div>
        <div className="content-box2" data-aos="fade-right">
          <h2>{t('CleaningProfile.1')}</h2>
          <p>{t('CleaningProfile.2')}</p>
          <br />
          <p style={{ color: "#6bc32c", marginBottom: "3px" }}><i style={{fontSize: "20px"}}>{t('CleaningProfile.3')}</i></p>
          <p>{t('CleaningProfile.4')}</p><br/>
          <p><small><strong>{t('CleaningProfile.5')} </strong>&nbsp;</small>{t('CleaningProfile.6')}</p>
          <p>{t('CleaningProfile.7')}</p>
          <p className="additionalcharge"><small>{t('CleaningProfile.8')}</small></p>
          <p className="pluscost"><strong>{t('CleaningProfile.9')}</strong></p>
        </div>
        <div className="box8"></div>
      </div>

      <div className="flexBox2">
        <div className="flexSpacer"></div>
        <div>
          <h2>{t('HowitWorks.1')}</h2>
          <p>{t('HowitWorks.2')}<strong>{t('HowitWorks.3')}</strong>{t('HowitWorks.4')}</p>
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
          <div style={{height: "60px"}}></div>
          <p>{t('Services.2')}</p>
        </div>
        <div className="box3"></div>
        <div className="background-box1 background9">
          <img src={pic9} alt="" />
        </div>
      </div>



      <div id="personal" className="flexBox">
        <div className="background-box2 background8">
          <img src={pic8} alt="" />
        </div>
        <div className="box6"></div>
        <div className="content-box2" data-aos="fade-right">
          <h2>{t('Work.1')}</h2>
          <p>{t('Work.2')}</p>
          <br />
          <p>{t('Work.3')}</p>
        </div>
        <div className="box8"></div>
      </div>

      <div id="omoss" className="flexBox">
        <div className="box1"></div>
        <div className="content-box1" data-aos="fade-right">
          <h2>{t('About.1')}</h2>
          <p>{t('About.2')}</p>
          
          {/* <p style={{ color: "rgb(107, 195, 44)"}}>{t('About.3')}</p> */}
        </div>
        <div className="box3"></div>
        <div className="background-box1 background2">
          <img src={pic2} alt="" />
        </div>
      </div>


      <h2 className="whatsincluded">{t('Included.01')}</h2>
      <div data-aos="fade-right" className="flexBox4" style={{ marginBottom: "30px" }}>
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
          <li>{t('Included.37')}</li>
          <li>{t('Included.32')}</li>
          <li>{t('Included.33')}</li>
          <li>{t('Included.34')}</li>
          <li>{t('Included.35')}</li>
          <li>{t('Included.36')}</li>         
          <li>{t('Included.38')}</li>
        </ul>

        <ul className="sExtras">
          <h2>{t('Included.40')}</h2>
          {/* <h3>{t('Included.41')}</h3> */}
          <li>{t('Included.46')}</li>
          <li>{t('Included.43')}</li>
          
          <li>{t('Included.47')}</li>
          <li>{t('Included.45')}</li>
          
        </ul>
        <div className="flexSpacer20"></div>
      </div>

      {/* <div className="socialMedia" data-aos="fade-right">
      <p>{t('Follow.1')}</p>
      <a href="https://www.facebook.com/californiaclean75" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/californiaclean.instockholm/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square"></i></a>
    </div> */}


      <Email />
      <Footer />

    </div>
  )
}

export default App;
