import React, { useState } from 'react';
import Menu from './Menu';
import './App.css'
import Game from './Game';


const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameProgress, setGameProgress] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div className="full-screen">
      {!isGameStarted && 
        <Menu 
          setIsGameStarted={setIsGameStarted} 
          setGameProgress={setGameProgress} />}

      {isGameStarted && 
        <Game 
          gameProgress={gameProgress} 
          setGameProgress={setGameProgress}
          score={score}
          setScore={setScore} />}
    </div>
  );
}

export default App;