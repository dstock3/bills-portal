import React, { useEffect, useState, useRef } from 'react';
import Menu from './Menu';
import './App.css'
import Game from './Game';
import Settings from './Settings';
import backgroundMusic from './assets/background_music.mp3';

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameProgress, setGameProgress] = useState(0);
  const [settings, setSettings] = useState(false)
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState(5);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)

  const audioElement = useRef(null);

  useEffect(()=> {
    if (!isGameStarted) setScore(0)
  }, [isGameStarted])

  useEffect(() => {
    if (isGameStarted && isSoundEnabled) {
      audioElement.current.play();
    }
  }, [isGameStarted, isSoundEnabled]);

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

      <audio ref={audioElement} src={backgroundMusic} loop />
    </div>
  );
}

export default App;
