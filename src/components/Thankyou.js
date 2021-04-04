
import React from 'react'

import { useState, useEffect } from 'react'

import './Thankyou.css'

const Thankyou = (props) => {

  let thankyouNoteClasses = ['thankyou']
  if (props.show) {
    thankyouNoteClasses = ['thankyou open']
  }

  return (
    <div className={thankyouNoteClasses}>
      <div>Tack för er information. Vi återkommer snarast!</div>
    </div>
  )
}

export default Thankyou;
