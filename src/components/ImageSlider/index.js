import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './slider.css'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div className="slider__top">
      <div className="slider__content">
        <div className="slider__text">
          <h1>Tours</h1>
          <p>
            Semper Paratus Sports Academy can help you arrange your cultural or
            sporting trip, including hotel bookings, coach transfers, fixture
            arrangements against local clubs, bilingual on-site assistance,
            museum and restaurant reservations plus match tickets for Premier
            League, La Liga, Serie A and other major European leagues. We have
            many years of experience working with major sports tour agents in
            the UK, Europe and the rest of the world, making all the
            arrangements for all kinds of different tours, for a wide variety of
            budgets and activities.
          </p>
        </div>
        <div className="slider__text">
          <h1>Coach + Play</h1>
          <p>
            Coach and Play the Spanish Way is a service that provides Spanish
            football methodology coaching, guidance and support for football
            clubs all over the world from amateur to professional. We provide
            the professionals and the steps to adopt the Spanish methodology at
            your club. Players and coaches are given the opportunity to push
            their skills in a fun and dynamic way to better their performance on
            the pitch and their results in the league.
          </p>
        </div>
      </div>
      <div className="slider ">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt="travelimage"
                  className="image shadow"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageSlider
