import React, { useState } from 'react';
import Quiz from './pages/Quiz/Quiz';
import './App.css';
import Results from './pages/Results/Results';

function App() {
  const initialPoints = {
    dramatic: 0,
    natural: 0,
    gamine: 0,
    classic: 0,
    ingenue: 0,
    romantic: 0,
    ethereal: 0,
  };
  const [page, setPage] = useState('home');
  const [results, setResults] = useState(initialPoints);

  function handleResults(points) {
    setResults(points);
    setPage('results');
  }

  function handleHome() {
    setResults(initialPoints);
    setPage('home');
  }


  return (
    <div className='App'>
      {page === 'home' && (
        <>
          <h1 className='homeHeader'>The Essence Quiz</h1>
          <h4>A quiz to find your personal style based on your personality and facial appearance.</h4>
          <p>This quiz is inspired by, and quotes Andrea Pflaumer and her book "Shopping for the Real You"</p>
          <button className='beginBtn' onClick={() => setPage('quiz')}>
            Begin
          </button>
        </>
      )}
      {page === 'quiz' && <Quiz toResults={handleResults} />}
      {page === 'results' && (
        <Results results={results} toHome={handleHome} />
      )}
    </div>
  );
}

export default App;
