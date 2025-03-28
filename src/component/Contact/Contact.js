import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'
import { useForm, ValidationError } from '@formspree/react'
import { toast } from 'react-hot-toast'

function Contact() {
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const [letterClass, setLetterClass] = useState('text-animate')
  const [state, handleSubmit] = useForm('mqkodwlb')

  if (state.succeeded) {
    toast.success('Email Sent', {
      style: {
        border: '1px solid #ffd700',
        backgroundColor: '#115173',
        padding: '16px',
        color: '#ffd700',
      },
      iconTheme: {
        primary: '#ffd700',
        secondary: '#115173',
      },
    })
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in Internships, Entry level jobs and even freelance
            opportunities. However, if you have any other requests or questions,
            don't hesitate to contact me using below form either.
          </p>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </li>

                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>

                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    id="message"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </li>

                <li>
                  <input
                    type="submit"
                    disabled={state.submitting}
                    className="flat-button"
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Amine Chaker <br />
          Paris / Créteil <br />
          Phone: +33605920875
          <br />
          Email: amchaker@outlook.com
        </div>
        <div className="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80717.75801964379!2d2.2646335809035154!3d48.85882554206043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e1!3m2!1sfr!2sfr!4v1740681923708!5m2!1sfr!2sfr"
            style={{ border: 0 }}
            className="myMap"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Loader type="square-spin" />
    </>
  )
}

export default Contact
