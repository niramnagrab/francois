import React from 'react'
import './ToursElements.css'
import Photo1 from '../../images/service1.svg'

function TourOptions() {
  return (
    <div>
      <div class="container">
        <div class="row mt-5 justify-content-center"></div>
        <div class="row">
          <div class="col-md-12 text-center mt-5">
            <h3 class="title-text">Our Tours</h3>
          </div>
          <div class="col-md-4 countries">
            <img src={Photo1} alt="uk" width="100%" />
            <h2 class="title-text">UK</h2>
            <p class="text-justified">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              consequatur delectus dolores enim nulla odio odit perferendis
              quaerat, quidem quisquam ratione recusandae tempore vero.
              Accusantium esse modi odio omnis?
            </p>
          </div>
          <div class="col-md-4 countries">
            <img src={Photo1} alt="spain" width="100%" />
            <h2 class="title-text">Spain</h2>
            <p class="text-justified">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              consequatur delectus dolores enim nulla odio odit perferendis
              quaerat, quidem quisquam ratione recusandae tempore vero.
              Accusantium esse modi odio omnis?
            </p>
          </div>
          <div class="col-md-4 countries">
            <img src={Photo1} alt="italy" width="100%" />
            <h2 class="title-text">Italy</h2>
            <p class="text-justified">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              consequatur delectus dolores enim nulla odio odit perferendis
              quaerat, quidem quisquam ratione recusandae tempore vero.
              Accusantium esse modi odio omnis?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourOptions
