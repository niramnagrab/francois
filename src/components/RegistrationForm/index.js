import React from 'react'
import './RegistrationFormElements.css'

function RegistrationForm() {
  return (
    <div>
      <div class="register">
        <div class="info">
          <h3 class="steps-text">Get a Free Trial Class</h3>
          <form action="">
            <input type="text" class="input" placeholder="Your Name" />
            <input type="email" class="input" placeholder="Email" />
            <input type="text" class="input" placeholder="We Chat ID" />
            <button class="buttons">Request Free Trial</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm
