import React from 'react'
import './ClassinComponents.css'
import Kids from '../../images/kids-learning.jpg'

function Classin() {
  return (
    <div class="classin-container">
      <div class="classin-content">
        <h1 class="title-text-left pt-3">
          Classin brings your classes to life wherever you are in the world
        </h1>
        <p class="text-justified">
          We use the online classroom application Classin to deliver our
          classes. Classin is an all-inclusive application that allows students
          to connect with teachers all around the world. When you create a
          Classin student account, our team will add your account to join the
          online SP school account. From there, you will have access to a
          calendar showing all approaching classes and the pre- and post-
          classroom activities to complete.
        </p>
        <button type="button" class="buttons font-weight-bold">
          Request Demo Class
        </button>
      </div>
    </div>
  )
}

export default Classin
