import React from 'react'
import './Email.css'

const Email = () => {
  return (
    <div className="email">
      <div className="email_message">
        Ring upp mig
      </div>
      <input type="text" placeholder="Namn"></input>
      <input type="text" placeholder="Telefonnummer"></input>      
      <select>
        <option value="Engångsstädning">Engångsstädning</option>
      </select>
      <br/>
      {/* <textarea rows="4" placeholder="Meddelande"></textarea> */}
      <button type="submit">Skicka meddelande</button>
    </div>
  )
}

export default Email
