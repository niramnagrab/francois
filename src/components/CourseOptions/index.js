import React from 'react'
import './CourseElements.css'
import DownArrow from '../../images/down.png'

function CourseOptions() {
  return (
    <div class="boxes">
      <div className="team-intro">
        <h2 class="header">Course Options</h2>
      </div>
      <div class="container4">
        <div class="div1">
          <h3 class="title-text">Option 1</h3>
          <p class="steps-text">2 classes a week</p>
          {/* <img src={DownArrow} width="60px" height="60px" /> */}
          <p class="steps-text">25-minute class</p>
          {/* <img src={DownArrow} width="60px" height="60px" /> */}
          <p class="steps-text">11-week course</p>
        </div>
        <div class="div2">
          <h3 class="title-text">Option 2</h3>
          <p class="steps-text">3 classes a week</p>
          {/* <img src={DownArrow} width="60px" height="60px" /> */}
          <p class="steps-text">25-minute class</p>
          {/* <img src={DownArrow} width="60px" height="60px" /> */}
          <p class="steps-text">11-week course</p>
        </div>
      </div>
    </div>
  )
}

export default CourseOptions
