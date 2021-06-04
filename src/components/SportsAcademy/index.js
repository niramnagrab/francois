import React from 'react'
import './SportsAcademyElements.css'
import About from '../../images/about.jpg'
import About2 from '../../images/about-us2.jpg'

function SportsAcademy() {
  return (
    <div>
      <div class="container">
        <div class="row custom_margin_top">
          <div class="col-md-12"></div>
          <div class="col-md-6 mt-3">
            <div className="image-text">
              <h1 class="title-text-left">About SP Sports Academy</h1>
              <p class="text-justified">
                We are a European Sports Academy with football, growth, and
                experience at the heart of everything we do. We offer our
                students, players, and coaches a springboard toward their future
                goals through a combination of services: English inspired by
                football, Football Development Tours in Europe and Coach and
                Play the Spanish Way. All our services endeavour to inspire
                young people to develop themselves and their abilities on and
                off the pitch.
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-3">
            <img src={About} alt="mock" width="100%" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SportsAcademy
