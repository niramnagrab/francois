import React from 'react'
import './TeamElements.css'
import Joely from '../../images/joely.jpg'
import Carlos from '../../images/carlos.jpg'
import Ben from '../../images/ben.jpg'

const Team = () => {
  return (
    <>
      <div>
        <div class="container">
          <div class="team-intro">
            <h2>Our team</h2>
            <p class="subtitle-center-bold">
              All our teachers are selected based on their qualifications, level
              of experience and interest in football.
            </p>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="card d-flex mx-auto">
                <div class="card-image">
                  <img src={Joely} class="img-fluid d-flex mx-auto" />
                </div>
                <div class="card-text">
                  <div class="subtitle-center-bold">Teacher Joely</div>

                  <p class="text-justified">
                    Hello, I’m Joely! After teaching English for 5 years, I am
                    such an advocate for this kind of approach. Teaching a
                    language in a targeted way through the context of the
                    student’s existing, genuine interest is genius. I have seen
                    students progress far quicker and I believe it is because of
                    their level of enjoyment, engagement, and interest.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card d-flex mx-auto">
                <div class="card-image">
                  <img src={Carlos} class="img-fluid d-flex mx-auto" />
                </div>
                <div class="card-text">
                  <div class="subtitle-center-bold">Teacher Carlos</div>
                  <p class="text-justified">
                    Hello, my name is Carlos. I am a UEFA licenced football
                    coach and English teacher. I have been teaching English
                    inspired by Football for more than 5 years to staff within
                    professional football clubs to children at local football
                    clubs. I would only recommend this approach if your goal
                    were to achieve results and see improvement in your English,
                    apply it to something you love, and the motivation is always
                    there.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card d-flex mx-auto">
                <div class="card-image">
                  <img src={Ben} class="img-fluid d-flex mx-auto" />
                </div>
                <div class="card-text">
                  <div class="subtitle-center-bold">Teacher Ben</div>
                  <p class="text-justified">
                    Hi! I am Ben and I have been teaching English inspired by
                    Football online for over a year, I am as passionate about
                    football as my students. The environment in the online
                    classroom is always high energy, fun and joyful. Students
                    stay focused and are so interested in the activities they
                    hardly notice they are learning grammar!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="trial-class">
        <button class="buttons">Request Demo Class</button>
      </div>
    </>
  )
}

export default Team
