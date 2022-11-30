import React from 'react';
import './Results.css';

export default function Results({ results, toHome }) {

  const sum = Object.values(results).reduce((a, b) => a + b, 0);
  // console.log(sum);
  // console.log(results);

  function getPercentages(typeTotal) {
    return Math.round((typeTotal / sum) * 100);

  }

  return (
    <div className='resultsWrapper'>
      <h1 className='resultsHeader'>Your personal style is:</h1>
      <h4>Dramatic: {getPercentages(results.dramatic)}%</h4>
      <h4>Natural: {getPercentages(results.natural)}%</h4>
      <h4>Gamine: {getPercentages(results.gamine)}%</h4>
      <h4>Classic: {getPercentages(results.classic)}%</h4>
      <h4>Ingenue: {getPercentages(results.ingenue)}%</h4>
      <h4>Romantic: {getPercentages(results.romantic)}%</h4>
      <h4>Ethereal: {getPercentages(results.ethereal)}%</h4>
      <button onClick={toHome}>Retake the Quiz</button>
    </div>
  );
}
