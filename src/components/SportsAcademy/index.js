import React from 'react'
import './SportsAcademyElements.css'
import { useTranslation } from 'react-i18next'

function SportsAcademy() {
  const { t } = useTranslation()
  return (
    <div className="aboutcontainer">
      <h2>{t('about_sp_academi')}</h2>
      <div className="aboutmainsection">
        <p className="aboutintro">{t('about_Sp_academi_body')}</p>
        <div className="aboutlist">
          <p className="reasonslist"> {t('about_football_dev_tours')}</p>
          <p className="reasonslist">{t('about_inspired_football')}</p>
          <p className="reasonslist">{t('about_coach')}</p>
        </div>
        <div>
          <p className="aboutintro">{t('about_sp_service')}</p>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="container">
    //     <div className="row custom_margin_top">
    //       <div className="col-md-12"></div>
    //       <div className="col-md-6 mt-3">
    //         <div className="image-text">
    //           <h1 className="title-text-left">About SP Sports Academy</h1>
    //           <p className="text-justified">
    //             We are a European Sports Academy with football, growth, and
    //             experience at the heart of everything we do. We offer our
    //             students, players, and coaches a springboard toward their future
    //             goals through a combination of services: English inspired by
    //             football, Football Development Tours in Europe and Coach and
    //             Play the Spanish Way. All our services endeavour to inspire
    //             young people to develop themselves and their abilities on and
    //             off the pitch.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="col-md-6 mt-3">
    //         <img src={About} alt="mock" width="100%" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SportsAcademy
