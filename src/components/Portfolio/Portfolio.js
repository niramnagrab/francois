import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './Portfolio.css'

const Portfolio = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  const images = [
    require('../../images/image.png').default,
    require('../../images/image.png').default,
    require('../../images/image.png').default,
    require('../../images/image.png').default,
    require('../../images/image.png').default,
  ]
  return (
    <div id="works">
      <div className="text-center" id="works-text"></div>

      <div id="works-carousel">
        <Carousel
          ssr
          // deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
          infinite={true}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={1000}
        >
          {images.map((image) => {
            return (
              <Image
                fluid
                key={image}
                draggable={false}
                style={{
                  width: '440.1px',
                  height: '336.53px',
                }}
                src={image}
              />
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default Portfolio
