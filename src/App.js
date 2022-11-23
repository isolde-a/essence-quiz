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
  return (
    <div className='App'>
      {page === 'home' && (
        <>
          <h1 className='homeHeader'>Welcome to the essence quiz!!</h1>
          <button className='beginBtn' onClick={() => setPage('quiz')}>
            Begin
          </button>
        </>
      )}
      {page === 'quiz' && <Quiz toResults={handleResults} />}
      {page === 'results' && (
        <Results results={results} toHome={() => setPage('home')} />
      )}
    </div>
  );
}

export default App;
