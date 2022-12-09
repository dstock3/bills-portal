import React from 'react';
import './style/menu.css'
import billImg from './assets/menu.png'

const Menu = ({ setIsGameStarted, setGameProgress }) => {
    const startNewGame = () => {
        setIsGameStarted(true);
        setGameProgress(1);
    }
    return (
        <div className="menu">
            <h1>Bill's Adventure</h1>
            <div className="menu-img-container">
                <img src={billImg} className="menu-pic" alt="pixel art of Bill Gates"></img>
            </div>
        
            <div className="menu-subcontainer">
                <p className="game-desc">In the 90s, Bill Gates is on a mission to create the best operating system ever: Windows 95. Join him on his journey as he works tirelessly to overcome challenges and obstacles, and compete with rival companies to create the most revolutionary operating system of all time. Are you ready to join Bill Gates and make history?</p>

                <div className="menu-button-container">
                    <button onClick={startNewGame}>Start New Game</button>
                    <button>Settings</button>
                </div>

            </div>
        </div>
    );
}

export default Menu;