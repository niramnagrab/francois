import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
import './testimonials.css'
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
  const { t } = useTranslation()
  const [people, setPeople] = useState(data)
  const [index, setIndex] = React.useState(0)
  const [levelParagraph, setLevelParagraph] = useState('')

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className="section">
      <div className="title">
        <h2> {t('testimonials_title')}</h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{t(name)}</h4>
              <p className="title">{title}</p>
              <p className="text">{t(quote)}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
        <button
          className="prev"
          onClick={() => setIndex(index - 1)}
          aria-label="Left Align"
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => setIndex(index + 1)}
          aria-label="Right Align"
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Testimonials
