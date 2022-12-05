import React from 'react';
import levels from './levels.json';
import './style/game.css'

const Game = (props) => {
    const { gameProgress, setGameProgress, score, setScore } = props;
  
    const currentLevel = levels.find(level => level.id === gameProgress);
  
    if (currentLevel) {
      return (
        <div className="game">
          <h1>{currentLevel.name}</h1>
          <p>{currentLevel.description}</p>
          {currentLevel.choices.map(choice => (
            <button
              onClick={() => {
                setGameProgress(gameProgress + 1);
                setScore(score + choice.val);
              }}
            >
              {choice.text}
            </button>
          ))}
        </div>
      );
    } else {
      return (
        <div className="game">
            <h1>Game Over</h1>
            <p>You have reached the end of the game.</p>
            {score > 5 ? (
                <p>Congratulations, your project was very successful!</p>
                ) : (
                <p>You have failed in your quest to create the best OS.</p>
            )}
        </div>
      );
    }
  };
  
export default Game;