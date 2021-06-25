import React from 'react'
import './sportsacademy.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function AboutSportsAcademy() {
  const { t } = useTranslation()
  return (
    <div class="sportsacademy-container">
      <div class="sportsacademy-content">
        <h1 class="text-left-about">English inspired by football</h1>
        <p class="text-justified-about">
          {t('about_heading')}

          {/* {t ,('')   ('We are an online English academy inspiring and motivating English
            language learners every day through a context that unites millions!
            English AND football are the two complementary keys that ignite
            conversations between people of different nationalities. The ability
            to express yourself confidently in English and furthermore in the
            context of football are skills that can open a world of
            opportunities. Our program English inspired by Football inspires
            young people with ambitions to work or play in the industry, but
            also individuals who only want to improve their level of English at
            a faster pace, in a motivating environment and through a context
            they enjoy.')} */}
        </p>
        <Link to="/registration">
          {' '}
          <button type="button" class="buttons">
            Request Demo Class
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AboutSportsAcademy
