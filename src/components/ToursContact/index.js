import React from 'react'
import CoachPlay from '../../images/coach-play.jpg'

function ToursContact() {
  return (
    <div class="container">
      <div class="row custom_margin_top">
        <div class="col-md-6">
          <img src={CoachPlay} alt="mock" width="100%" />
        </div>
        <div class="col-md-6">
          <h3 class="title-text">Coach & Play</h3>
          <p class="text-justified">
            Are you looking to take your team to the next level, increase your
            team’s performance and move up the league table? Receive our
            methodology coaching and learn how to coach and play the Spanish
            way. These programs are completely personalised based on your
            budget, size and location. To receive more information about our
            coaching send us an email and we will contact you with some
            questions!
          </p>
          <div class="row mt-3 mb-5">
            <div class="col-md-6 col-6 contact">
              <div class="row">
                <div class="col-md-3">
                  <i class="fas fa-phone-alt fa-2x"></i>
                </div>
                <div class="col-md-9">
                  <h5>Call Us</h5>
                  <h6 class="text-secondary">+44 0747 137 0804</h6>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-6 contact">
              <div class="row">
                <div class="col-md-3">
                  <i class="fas fa-envelope fa-2x"></i>
                </div>
                <div class="col-md-9">
                  <h5>E-mail Us</h5>
                  <h6 class="text-secondary">yourmail@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToursContact
