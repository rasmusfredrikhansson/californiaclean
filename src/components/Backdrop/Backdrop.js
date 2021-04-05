import React from 'react'
import './Backdrop.css'

const Backdrop = props => {

  let backDropClasses = ['backdrop']

  if (props.open) {
    backDropClasses = ['backdrop']
  } else {
    backDropClasses = ['backdrop close']
  }

  return (
    <div className={backDropClasses} onClick={props.click} />
  )
}

export default Backdrop
