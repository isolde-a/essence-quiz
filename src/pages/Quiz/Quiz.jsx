import React, { useState } from 'react';

import { questions } from './questions';

import './Quiz.css';

export default function Quiz({ toResults }) {
  const scoreCard = {
    dramatic: 0,
    natural: 0,
    gamine: 0,
    classic: 0,
    ingenue: 0,
    romantic: 0,
    ethereal: 0,
  };
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(scoreCard);

  
  function sumObjects(...objs) {
    return objs.reduce((a, b) => {
      for (let k in b) {
        if (b.hasOwnProperty(k))
          a[k] = (a[k] || 0) + b[k];
      }
      return a;
    }, {});
  }

  function subObjects(score) {
    let difference = {};
    Object.keys(points).forEach(key => {
      if (score.hasOwnProperty(key)) {
        difference[key] = points[key] - score[key];
      }
    })

    return difference;
  }

  function handleChange(event, score) {
    if (event.target.checked) {
      const addScores = sumObjects(points, score);
      // console.log('add scores', addScores);
      setPoints(addScores);
    } else {
      const subScores = subObjects(score);
      // console.log('sub scores', subScores);
      setPoints(subScores);
    }
  }

  function handleNextClick() {
    if (currentQuestion + 1 === questions.length) {
      toResults(points);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <div className='questionContainer'>
      <h1 className='quizHeader'>{questions[currentQuestion].question}</h1>
      {questions[currentQuestion].options.map((o, i) => (
        <label key={'q_' + currentQuestion + 'o_' + i} htmlFor={'q_' + currentQuestion + 'option_' + i} className='form-control'>
          <input type='checkbox' id={'q_' + currentQuestion + 'option_' + i} onChange={(event) => handleChange(event, o.score)} className='optionBox' />
          {o.optionText}
        </label>
      ))}
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}
