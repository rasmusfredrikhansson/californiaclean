import React from 'react'
import './Thankyou.css'

const Thankyou = (props) => {

let thankyouNoteClasses = ['thankyou']
if (props.show) {
    thankyouNoteClasses = ['thankyou open']
    
}
  return (
    <div className={thankyouNoteClasses}>
      <div>Thank you for submitting your information, we will be in touch shortly!</div>
    </div>
  )
}

export default Thankyou;
