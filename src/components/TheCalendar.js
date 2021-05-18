import React, { useState, useEffect, useRef } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import ContactForm from './ContactForm'
import { useTranslation } from 'react-i18next'



const TheCalendar = (props) => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  const [calendarClose, setCalendarClose] = useState(false)
  const [formOpen, setFormOpen] = useState(false)

  const { t, i18n } = useTranslation()

  let minDate = new Date()

  let dateFormated = date.toLocaleDateString()
  // console.log(dateFormated);

  let calendarClasses = ['calendar']
  if (props.show) {
    calendarClasses = ['calendar open']
  }

  if (calendarClose) {
    calendarClasses = ['calendar']
  }

  const onCalendarChange = date => {
    setDate(date)
    console.log(date)
  }

  const changeTime = e => {
    setTime(e.currentTarget.value)
  }

  const openForm = () => {
    setFormOpen(open => !open)
    setCalendarClose(true)
  }


  // close the contact form when user clicks elsewhere

  const node = useRef();
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    setFormOpen(false);
    setCalendarClose(false)
  };


  useEffect(() => {
    if (formOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [formOpen]);


  return (
    <div ref={node}>

      <div className={calendarClasses}>
        <Calendar
          onChange={onCalendarChange}
          value={date}
          showNeighboringMonth={true}
          minDate={minDate}
        />

        <div className="radio-btn">
          <input onChange={changeTime} className="radio__input" type="radio" name="time" id="morning" value="morning"></input>
          <label className="radio__label" htmlFor="morning">{t('Booking.1')}</label>
          <input onChange={changeTime} className="radio__input" type="radio" name="time" id="afternoon" value="afternoon"></input>
          <label className="radio__label" htmlFor="afternoon">{t('Booking.2')}</label>
        </div>
        <div>
          <button className="bookNow2" onClick={openForm}>{t('Booking.3')}</button>
        </div>
      </div>
      <ContactForm show={formOpen} contactDate={dateFormated} contactTime={time} parentCallback={props.parentCallback} />
    </div>
  )
}

export default TheCalendar