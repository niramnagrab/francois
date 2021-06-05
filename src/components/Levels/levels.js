import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './levels.css'

function LevelComponent(props) {
  const [levelParagraph, setLevelParagraph] = useState('')

  const p1 =
    'Gain a good command of the verb to be in the present tenseRepeatedly ask questions using a variety of question words Learn the correct use of various prepositions Practice describing objects and their location Be able to identify countable and uncountable nouns Gain a foundational knowledge of the affirmative, interrogative, and negative in the present simple In levels 4, 5 and 6 new verbs and the use of auxiliary verbs are introduced, along with the present continuous, the imperative and the introduction of expressing opinions, likes and dislikes.'
  const p2 =
    'Add to their foundational knowledge of the verb to be and the present simple Improve their ability to use the present simple and the necessary auxiliary verbs with 100+ new verbs Continue to ask a variety of questions with various question words Be introduced to the future tense and the past simple, this will include a lot of practice and repetition Gain knowledge of many different grammatical forms including comparatives, the first conditional, uncountable, and countable nouns, direct and indirect objects and many more Learn much more specific and technical football vocabulary.'
  const p3 =
    'Have a good command of the present, past and future tenses Continue to improve their verbal agilityLearn a variety of new grammatical structures such as, the superlative, to take time, still-yet-already-anymore, to be able to, the accusative and many more Be introduced to the present perfect tense Start to regularly practice making suggestions and sharing opinions using modal verbs (must, should, have to) Start to build a knowledge of multiple phrasal verbs Gain an extensive knowledge of football vocabulary.'
  const p4 =
    'Learn various conjunction words such as although, however, and despite Improve their technical football vocabulary Add to their inventory of adjectives Gain knowledge of native football expressions Learn suggestive language in order to confidently express opinions, make suggestions and use logical conclusions Continue to practice previous grammatical forms Be introduced to the second and third conditional Be able to differentiate between the verbs to remind/remember and to be used to/used to (past form) Practice using expressions such as “I would rather...” and “It’s worth it” Finish the course with the ability to express hopes, wishes and desires.'
  const p5 =
    'Continue to practice and perfect their agility with higher level grammar Learn a selection of new phrasal verbs during each 11-week course Learn how to challenge the opinions of others and justify their own Express themselves naturally using logical conclusions and suggestive language Practice real-word interview scenarios, answering difficult questions and giving respectful answers Practice debating and negotiationUnderstand jokes Use expressions Make presentations Practice job interviews and self-praise Improve comprehension of different accents .'

  useEffect(() => {
    setLevelParagraph(p1)
    return () => {}
  }, [])

  const changeLevelText = (id) => {
    if (id === 1) setLevelParagraph(p1)
    else if (id === 2) setLevelParagraph(p2)
    else if (id === 3) setLevelParagraph(p3)
    else if (id === 4) setLevelParagraph(p4)
    else if (id === 5) setLevelParagraph(p5)
  }

  return (
    <div className="last-container">
      <div className="upper-section">
        <h1 className="title-text">Select Your Level</h1>
        <div className="section-buttons">
          <button
            className="steps-text primary indexBtn btn2"
            id="2"
            onClick={() => changeLevelText(1)}
          >
            Preliminary
          </button>
          <button
            className="steps-text primary indexBtn btn2"
            id="2"
            onClick={() => changeLevelText(2)}
          >
            Preintermediate
          </button>
          <button
            className="steps-text primary indexBtn btn3"
            id="3"
            onClick={() => changeLevelText(3)}
          >
            Intermediate
          </button>
          <button
            className="steps-text primary indexBtn btn4"
            id="4"
            onClick={() => changeLevelText(4)}
          >
            Preadvanced
          </button>
          <button
            className="steps-text primary indexBtn btn5 active"
            id="5"
            onClick={() => changeLevelText(5)}
          >
            Advanced
          </button>
        </div>
      </div>
      <div className="middle-section">
        <div className="left">
          <img src="imgs/Advanced.png" className="slider-image" alt="" />
        </div>
        <div className="right">
          <p id="paraText" className="text-justified">
            {levelParagraph}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LevelComponent
