import React from 'react'
import './Instagram.css'
import first from '../../images/1.png'
import second from '../../images/2.png'
import third from '../../images/3.png'

function Instagram() {
  return (
    <div className="images">
      <div className="first">
        <img
          target="_blank"
          onClick={(e) =>
            (window.location = 'https://www.instagram.com/the_french_review/')
          }
          src={first}
          alt="insta image"
          height={400}
          width={300}
        />
      </div>
      <div className="second">
        <img src={second} alt="insta image" height={400} width={300} />
      </div>
      <div className="third">
        <img src={third} alt="insta image" height={400} width={300} />
      </div>
    </div>
  )
}

export default Instagram
