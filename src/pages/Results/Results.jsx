import React from 'react';
import './Results.css';

export default function Results({results, toHome}) {
  return (
    <div className='resultsWrapper'>
      <h1 className='resultsHeader'>Here are your results!!</h1>
      <h4>Dramatic: {results.dramatic}</h4>
      <h4>Natural: {results.natural}</h4>
      <h4>Gamine: {results.gamine}</h4>
      <h4>Classic: {results.classic}</h4>
      <h4>Ingenue: {results.ingenue}</h4>
      <h4>Romantic: {results.romantic}</h4>
      <h4>Ethereal: {results.ethereal}</h4>
      <button onClick={toHome}>Back to home</button>
    </div>
  )
}