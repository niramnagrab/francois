import React from 'react'
import './Instagram.css'
import first from '../../images/1.png'
import second from '../../images/2.png'
import third from '../../images/3.png'

function Instagram() {
  return (
    <div className="instagram-carousel">
      <h1>Some of my latest Instagram posts</h1>
      <div className="images">
        <div className="first">
          <img
            target="_blank"
            onClick={(e) =>
              (window.location = 'https://www.instagram.com/the_french_review/')
            }
            src={first}
            alt="insta image"
            height={250}
            width={250}
          />
        </div>
        <div className="second">
          <img
            target="_blank"
            onClick={(e) =>
              (window.location = 'https://www.instagram.com/the_french_review/')
            }
            src={second}
            alt="insta image"
            height={300}
            width={250}
          />
        </div>
        <div className="third">
          <img
            target="_blank"
            onClick={(e) =>
              (window.location = 'https://www.instagram.com/the_french_review/')
            }
            src={third}
            alt="insta image"
            height={300}
            width={250}
          />
        </div>
      </div>
    </div>
  )
}

export default Instagram
