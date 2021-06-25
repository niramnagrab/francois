import React from 'react'
import './TeamElements.css'
import Joely from '../../images/joely.jpg'
import Carlos from '../../images/carlos.jpg'
import Ben from '../../images/ben.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Team = () => {
  const { t } = useTranslation()
  return (
    <>
      <div>
        <div class="container">
          <div class="team-intro">
            <h2>{t('our_team')}</h2>
            <p class="subtitle-center-bold">{t('our_team_txt')}</p>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="card d-flex mx-auto">
                <div class="card-image">
                  <img src={Joely} class="img-fluid d-flex mx-auto" />
                </div>
                <div class="card-text">
                  <div class="subtitle-center-bold">{t('teacher_joely')}</div>

                  <p class="text-justified">{t('teacher_joely_txt')}</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card d-flex mx-auto">
                <div class="card-image">
                  <img src={Carlos} class="img-fluid d-flex mx-auto" />
                </div>
                <div class="card-text">
                  <div class="subtitle-center-bold">{t('teacher_carlos')}</div>
                  <p class="text-justified">{t('teacher_carlos_txt')}</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card d-flex mx-auto">
                <div class="card-image">
                  <img src={Ben} class="img-fluid d-flex mx-auto" />
                </div>
                <div class="card-text">
                  <div class="subtitle-center-bold">{t('teacher_ben')}</div>
                  <p class="text-justified">{t('teacher_ben_txt')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="trial-class">
        <Link to="/registration">
          <button class="buttons">{t('how_to_btn')}</button>
        </Link>
      </div>
    </>
  )
}

export default Team
