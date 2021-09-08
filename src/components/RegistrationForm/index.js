import React from 'react'
import './RegistrationFormElements.css'

function RegistrationForm() {
  return (
    <div>
      <div className="register">
        <div className="info">
          <h3 className="registration-text">Get a Free Trial Class</h3>
          <form action="">
            <input type="text" className="input" placeholder="Your Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="text" className="input" placeholder="We Chat ID" />
            <button className="buttons" aria-label="Trial Class">
              Request Free Trial
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm
