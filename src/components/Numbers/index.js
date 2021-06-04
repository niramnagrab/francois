import React from 'react'
import './NumbersElements.css'

function Numbers() {
  return (
    <div>
      <div class="title-header">
        <h3 class="title-text">
          We focus on teaching students from aged 10 and above
        </h3>
        <div class="numbers">
          <div class="number1">
            <p class="title-text" id="0101">
              100%
            </p>
            <p class="subtitle-center-bold">Native English Teachers</p>
          </div>
          <div class="number1">
            <p class="title-text" id="0102">
              {' '}
              5 years
            </p>
            <p class="subtitle-center-bold">
              Teaching English through football
            </p>
          </div>
          <div class="number1">
            <p class="title-text">UEFA</p>
            <p class="subtitle-center-bold">
              Licenced coach and course developer
            </p>
          </div>
          <div class="number1">
            <p class="title-text" id="0103">
              150
            </p>
            <p class="subtitle-center-bold">
              Years of conversations about football
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Numbers
