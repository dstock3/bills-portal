import React, { useEffect, useState } from 'react';
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
    const [images, setImages] = useState({})

    const { gameProgress, setGameProgress, score, setScore, setIsGameStarted } = props;
  
    const currentLevel = levels.find(level => level.id === gameProgress);

    const [progressBar, setProgressBar] = useState(["blank", "blank", "blank", "blank", "blank", "blank", "blank"])

    useEffect(()=> {
      if (currentLevel) {
        let prog = progressBar
        for (let i = 0; i < parseInt(currentLevel.id); i++) {
          prog[i] = "filled"
        }
        setProgressBar(prog)
      }
    }, [gameProgress])

    const restartGame = () => {
      setIsGameStarted(false)
      setProgressBar(["filled", "blank", "blank", "blank", "blank", "blank", "blank"])

    }

    useEffect(() => {
      let thisLevel = levels.find(level => level.id === gameProgress);
  
      if (thisLevel) {
        setImages({
          1: imgOne,
          2: imgTwo,
          3: imgThree,
          4: imgFour,
          5: imgFive,
          6: imgSix,
          7: imgSeven
        });
      }
    }, [gameProgress]);

    if (currentLevel) {
      return (
        <div className="game">
          <h1>{currentLevel.name}</h1>
          
          <div className="level-pic-container">
            {Object.keys(images).map((keyname, i) => (
                parseInt(currentLevel.id) === parseInt((keyname)) ? 
                <img className="level-pic" src={images[keyname]} alt="pixel art of Bill Gates" loading="lazy"></img> : null
              ))}
          </div>

          <p className="level-desc">{currentLevel.description}</p>

          <div className="game-choices">
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
        
          <div className="progress-container">
            <div className="progress-bar">
              {(progressBar).map((prog, i) => (
                i === 6 ?
                  <li className={"progress last " + prog}>
                  
                  </li> : 
                  <li className={"progress " + prog}>
                  
                  </li>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="game">
            {score > 5 ? (
              <>
                <h1>Success!</h1>
                <div className="level-pic-container">
                  <img src={winImg} className="level-pic" alt="Pixel art of Bill Gates in a triumphant pose"></img>
                </div>
                <p className="level-desc">Congratulations, your project was very successful!</p>
                <button onClick={()=>restartGame()}>Play Again</button>
              </>  
              ) : (
              <>
                <h1>Game Over</h1>
                <div className="level-pic-container">
                  <img src={lossImg} className="level-pic" alt="Pixel art of Bill Gates with a sad expression"></img>
                </div>

                <p className="level-desc">You have failed in your quest to create the best OS.</p>
                <button onClick={()=>restartGame()}>Play Again</button>
              </>
            )}
        </div>
      );
    }
  };
  
export default Game;