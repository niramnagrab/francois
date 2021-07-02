import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { useTranslation } from 'react-i18next'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './slider.css'

const ImageSlider = ({ slides }) => {
  const { t } = useTranslation()

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
          <h1>{t('our_tours')}</h1>

          <p>{t('tour_text')}</p>
        </div>
        <div className="slider__text">
          <h1>{t('coach_play')}</h1>
          <p>{t('coach_play_text')}</p>
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
