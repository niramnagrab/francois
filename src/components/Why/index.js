import React from 'react'
import './WhyElements.css'
import Value from '../../images/value.svg'
import Idea from '../../images/idea.svg'
import Inspiration from '../../images/inspiration.svg'
import Team from '../../images/team.svg'
import Goal from '../../images/goal.svg'

const WhyUs = () => {
  return (
    <div class="why-us">
      {/* <!-- <img class="why-vector" src="images/vector2.png" alt="" /> --> */}
      <div class="team-intro">
        {' '}
        <h2 className="header">Why choose us</h2>
      </div>

      <div class="why-boxes">
        <div class="why-box">
          <img src={Value} class="why-icon" width="50px" height="50px" alt="" />
          <h3 class="subtitle-center-bold">Professionaly developed system</h3>
          <p class="text-center-simple">
            A selective team of experienced teachers and qualified football
            coaches have developed the course content
          </p>
        </div>

        <div class="why-box">
          <img src={Idea} class="why-icon" width="50px" height="50px" alt="" />
          <h3 class="subtitle-center-bold">
            Engagement in the online classroom
          </h3>
          <p class="text-center-simple">
            The context of football in an engaging and motivating environment
            encourages our students to achieve faster results
          </p>
        </div>

        <div class="why-box">
          <img
            src={Inspiration}
            class="why-icon"
            width="50px"
            height="50px"
            alt=""
          />
          <h3 class="subtitle-center-bold">Effective methods</h3>
          <p class="text-center-simple">
            Our method focuses on our student’s ability and confidence with
            spoken English, we apply a system of repetition and interactive,
            visual activities
          </p>
        </div>

        <div class="why-box">
          <img src={Team} class="why-icon" width="50px" height="50px" alt="" />
          <h3 class="subtitle-center-bold">Selective team of teachers</h3>
          <p class="text-center-simple">
            We have a talented team of native, qualified teachers who create
            energy and fun in the online classroom
          </p>
        </div>

        <div class="why-box">
          <img src={Goal} class="why-icon" width="50px" height="50px" alt="" />
          <h3 class="subtitle-center-bold">Personalised service</h3>
          <p class="text-center-simple">
            Our selective team are here to personally respond and look after you
            throughout the process
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
