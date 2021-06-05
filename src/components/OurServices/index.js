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
                Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et
                sed nam sem tellus erat Lorem ipsum dolor amet, consectetur
                adipiscing elit.
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
                Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et
                sed nam sem tellus erat Lorem ipsum dolor amet, consectetur
                adipiscing elit.
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
                Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et
                sed nam sem tellus erat Lorem ipsum dolor amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
