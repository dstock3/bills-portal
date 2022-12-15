import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import './App.css'
import Game from './Game';
import Settings from './Settings';

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameProgress, setGameProgress] = useState(0);
  const [settings, setSettings] = useState(false)
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState(5);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)

  useEffect(()=> {
    if (!isGameStarted) setScore(0)
  }, [isGameStarted])

  return (
    <div className="full-screen">
      {!isGameStarted & !settings && 
        <Menu 
          setIsGameStarted={setIsGameStarted} 
          setGameProgress={setGameProgress}
          setSettings={setSettings} />}
      
      {settings &&
        <Settings 
          setSettings={setSettings}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          isSoundEnabled={isSoundEnabled}
          setIsSoundEnabled={setIsSoundEnabled} />}

      {isGameStarted && 
        <Game 
          gameProgress={gameProgress} 
          setGameProgress={setGameProgress}
          score={score}
          setScore={setScore}
          setIsGameStarted={setIsGameStarted} 
          difficulty={difficulty} />}

    </div>
  );
}

export default App;
