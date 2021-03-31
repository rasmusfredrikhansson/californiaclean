
import React from 'react'

import { useState, useEffect } from 'react'

import './Thankyou.css'

const Thankyou = (props) => {

// const [closeThankyou, setCloseThankyou] = useState(false)
  // const [backdropClose, setBackdropClose] = useState(false);

let thankyouNoteClasses = ['thankyou']
if (props.show) {
    thankyouNoteClasses = ['thankyou open']
}

 
   
  
  return (
    <div className="thankyou">
      <div>Tack för er information. Vi återkommer snarast!</div>
    </div>
  )
}

export default Thankyou;
