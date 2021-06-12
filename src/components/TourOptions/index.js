import React from 'react'
import './ToursElements.css'
import UK from '../../images/UK.png'
import Spain from '../../images/spain.png'
import Italy from '../../images/Italy.png'

function TourOptions() {
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center"></div>
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="title-text">Our Tours</h3>
          </div>
          <div class="col-md-4 countries">
            <img src={UK} alt="uk" width="100%" />
            <h2 class="title-text">UK</h2>
            <p class="text-justified-tours">
              Stadium tours which provide you with a behind the scenes look at
              some of the top clubs in Europe. Visit dressing rooms and sit in
              the seats of your favourite players, take a look at their trophy
              rooms and enjoy being part of football history.
            </p>
          </div>
          <div class="col-md-4 countries">
            <img src={Spain} alt="spain" width="100%" />
            <h2 class="title-text">Spain</h2>
            <p class="text-justified-tours">
              Come with us to the Nou Camp, Santiago Bernabéu or Mestalla to
              watch FC Barcelona, Real Madrid CF or Valencia CF play. Stay in
              one of the best hotels in the capital of Spain, downtown Barcelona
              or Valencia, enjoy top-level coaching and games plus first-class
              football facilities.
            </p>
          </div>
          <div class="col-md-4 countries">
            <img src={Italy} alt="italy" width="100%" />
            <h2 class="title-text">Italy</h2>
            <p class="text-justified-tours">
              We arrange tours for visiting clubs and schools including friendly
              matches against local teams or participation in local
              competitions, complementing the tours with any additional tourist
              and cultural activities that the group may require.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourOptions
