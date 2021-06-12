import React from 'react'
import './ServicesElements.css'
import Service1 from '../../images/service1.svg'
import Service2 from '../../images/service2.svg'
import Service3 from '../../images/service3.svg'

function OurServices() {
  return (
    <div>
      <div class="centered-div col-md-12 text-center custom_margin_top description">
        <div className="team-intro">
          <h2 class="services">Our Services</h2>
        </div>
        <p class="subtitle-center-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, lectus
          et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div class="row">
          <div class="col-md-4">
            <div class="card shadow text-center p-4 services">
              <div class="justify-content-center">
                <img
                  src={Service1}
                  className="service-images"
                  alt="lan"
                  height="58px"
                  width="55px"
                />
              </div>

              <h5 class="subtitle-center-bold mt-4">
                English Inspired by Football
              </h5>
              <p class="text-justified mb-3">
                An innovative and proven way to increase enjoyment in the
                classroom, accelerate results and inspire young people. Learn
                English with native teachers online through the subject of
                football and never lose interest on your road to fluency.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow text-center p-4 services">
              <div class="justify-content-center">
                <img
                  src={Service2}
                  className="service-images"
                  alt="lan"
                  height="58px"
                  width="55px"
                />
              </div>

              <h5 class="subtitle-center-bold mt-4">European Tours</h5>
              <p class="text-justified mb-3">
                Tailor-made football tours in England, Spain, and Italy.
                Experience the heart of football in the home of football. Visit
                stadiums, play against local teams, watch league matches, speak
                English and experience an unforgettable trip.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow text-center p-4 services">
              <div class="justify-content-center">
                <img
                  src={Service3}
                  className="service-images"
                  alt="lan"
                  height="58px"
                  width="65px"
                />
              </div>

              <h5 class="subtitle-center-bold mt-4">
                Coach & Play the Spanish Way
              </h5>
              <p class="text-justified mb-3">
                Learn how to coach and play football through the Spanish
                methodology. Our programs support amateur, semi-professional,
                and professional clubs to adopt the unrivaled Spanish
                methodology to improve their performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
