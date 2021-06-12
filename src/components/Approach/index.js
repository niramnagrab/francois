import React from 'react'
import './ApproachElements.css'
import Step1 from '../../images/step4.png'
import Step2 from '../../images/step3.png'

function Approach() {
  return (
    <div>
      <div class="txt3">
        <div className="team-intro">
          <h2 class="header">Our Approach</h2>
        </div>
        <p class="subtitle-center-bold">
          Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
          consectetur.
        </p>

        <div className="sect5">
          <div class="class-time">
            <img class="mob1" src={Step2} alt="class-approach" />
            <h3 class="approach-title">20 minutes after</h3>
            <p class="text-center-simple">
              After the class, complete the 15-minute post-class activities in
              the class folder of your personal Classin account
            </p>
          </div>

          <div class="class-time">
            <img
              class="mob1"
              src={Step1}
              width="59px"
              height="59px"
              alt="class-approach"
            />
            <h3 class="approach-title">25 minutes connected</h3>
            <p class="text-center-simple">
              Enjoy the 25-minute interactive class with a highly qualified
              teacher. The teacher will lead the class to help you improve your
              level!
            </p>
          </div>

          <div class="class-time">
            <img class="mob1" src={Step2} alt="class-approach" />
            <h3 class="approach-title">15 minutes before</h3>
            <p class="text-center-simple">
              15 minutes before the class – review the week’s vocabulary and
              grammar point examples in the class folder of your personal
              Classin account
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Approach
