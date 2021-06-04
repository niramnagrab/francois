import React from 'react'
import './PhilosophyElements.css'
import Inspire from '../../images/inspire.png'
import Engage from '../../images/engage.png'
import Achieve from '../../images/achieve.png'
import Child from '../../images/philosophy-child.png'

const Philosophy = () => {
  return (
    <div className="overall">
      <div class="teaching-philosophy">
        <div className="team-intro">
          {' '}
          <h2 class="header">Our Teaching Philosophy</h2>
        </div>

        <ul class="folder">
          <li>
            <div className="icons-div image-margin">
              <img src={Inspire} />
              <p>Inspire</p>
            </div>
          </li>
          <li>
            <div className="icons-div">
              <img src={Engage} />
              <p>Engage</p>
            </div>
          </li>
          <li>
            <div className="icons-div">
              <img src={Achieve} />
              <p>Achieve</p>
            </div>
          </li>
        </ul>
        <div className="our-philosophy">
          <div className="philosophy-content">
            {/* <h1 class="title-text-center pt-3">English inspired by football</h1> */}
            <p class="text-justified-philosophy">
              Our students learn how to communicate in English confidently and
              correctly through the context of football. Linking interest with
              learning is the key to our philosophy. We create incomparable
              engagement and level of focus in our online classrooms because our
              students are truly interested in the subject of discussion. We
              teach grammar structures and vocabulary that can be used in a wide
              variety of situations and environments, not only the world of
              football. Learning with us is about inspiring, engaging and
              achieving.
            </p>
            <button type="button" class="buttons">
              Request Demo Class
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Philosophy
