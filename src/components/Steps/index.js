import React from 'react'
import './IndexElements.css'
import Number1 from '../../images/1.svg'
import Number2 from '../../images/2.svg'
import Number3 from '../../images/3.svg'
import Number4 from '../../images/4.svg'

const Steps = () => {
  return (
    <>
      <div class="container1">
        <div class="team-intro">
          <h2>Step-by-step</h2>
          <p class="subtitle-center-bold">
            Embark on your road to fluency today with these 4 simple steps
          </p>
        </div>
        <div class="sect1">
          <ul class="contain">
            <li class="steps">
              <img src={Number1} alt="" />
              <h3 class="subtitle-center-bold">Register</h3>
              <p class="text-justified">
                Register for a free trial class with one of our
                experienced,native teachers. Register for a free trial class
                with one of our experienced, native teachers.
              </p>
            </li>
            <li class="steps">
              <img src={Number2} alt="" />
              <h3 class="subtitle-center-bold">We contact you</h3>
              <p class="text-justified">
                Your dedicated course advisor will promptly contact you directly
                via WeChat to request more information and organise the time of
                the trial class
              </p>
            </li>
            <li class="steps">
              <img src={Number3} alt="" />
              <h3 class="subtitle-center-bold">Download Classin</h3>
              <p class="text-justified">
                Download the free Classin application to your preferred device
                (we recommend a laptop or computer because of the level of
                interactivity in our classes)
              </p>
            </li>

            <li class="steps">
              <img src={Number4} alt="" />
              <h3 class="subtitle-center-bold">We allocate the teams</h3>
              <p class="text-justified">
                After the trial class, our team of experienced teachers will
                allocate the perfect group based on the student’s level and age
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Steps
