import React from 'react'
import './SportsAcademyElements.css'


function SportsAcademy() {
  return (
    <div className="aboutcontainer">
      <h2>About SP Sports Academy</h2>
      <div className="aboutmainsection">
        <p className="aboutintro">
          We are a European Sports Academy with football, growth, and experience
          at the heart of everything we do. We offer our students, players, and
          coaches a springboard toward their future goals through a combination
          of services:
        </p>
        <div className="aboutlist">
          <p className="reasonslist"> Football Development Tours</p>
          <p className="reasonslist">English Inspired by Football</p>
          <p className="reasonslist"> Coach & Play the Spanish Way</p>
        </div>
        <div>
          <p className="aboutintro">
            All our services endeavour to inspire young people to develop
            themselves and their abilities on and off the pitch.
          </p>
        </div>
      </div>
    </div>
    // <div>
    //   <div class="container">
    //     <div class="row custom_margin_top">
    //       <div class="col-md-12"></div>
    //       <div class="col-md-6 mt-3">
    //         <div className="image-text">
    //           <h1 class="title-text-left">About SP Sports Academy</h1>
    //           <p class="text-justified">
    //             We are a European Sports Academy with football, growth, and
    //             experience at the heart of everything we do. We offer our
    //             students, players, and coaches a springboard toward their future
    //             goals through a combination of services: English inspired by
    //             football, Football Development Tours in Europe and Coach and
    //             Play the Spanish Way. All our services endeavour to inspire
    //             young people to develop themselves and their abilities on and
    //             off the pitch.
    //           </p>
    //         </div>
    //       </div>
    //       <div class="col-md-6 mt-3">
    //         <img src={About} alt="mock" width="100%" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SportsAcademy
