import React, { useState } from 'react';
import levels from './levels.json';
import './style/game.css'
import winImg from './assets/success.png'
import lossImg from './assets/failure.png'
import imgOne from './assets/1.png'
import imgTwo from './assets/2.png'
import imgThree from './assets/3.png'
import imgFour from './assets/4.png'
import imgFive from './assets/5.png'
import imgSix from './assets/6.png'
import imgSeven from './assets/7.png'

const Game = (props) => {
    const [images, setImages] = useState({
      1: imgOne,
      2: imgTwo,
      3: imgThree,
      4: imgFour,
      5: imgFive,
      6: imgSix,
      7: imgSeven
    })

    const { gameProgress, setGameProgress, score, setScore } = props;
  
    const currentLevel = levels.find(level => level.id === gameProgress);

    if (currentLevel) {
      return (
        <div className="game">
          <h1>{currentLevel.name}</h1>
          <p>{currentLevel.description}</p>

          {Object.keys(images).map((keyname, i) => (
            parseInt(currentLevel.id) === parseInt((keyname)) ? 
            <img className="level-pic" src={images[keyname]} alt="pixel art of Bill Gates"></img> : null
          ))}
          
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
              <>
                <img src={winImg} alt="Pixel art of Bill Gates in a triumphant pose"></img>
                <p>Congratulations, your project was very successful!</p>
              </>  
              ) : (
              <>
                <img src={lossImg} alt="Pixel art of Bill Gates with a sad expression"></img>
                <p>You have failed in your quest to create the best OS.</p>
              </>
            )}
        </div>
      );
    }
  };
  
export default Game;