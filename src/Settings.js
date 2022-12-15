import React from 'react'
import './style/settings.css'

const Settings = ({setSettings, difficulty, setDifficulty}) => {
  return (
    <div className="settings">
      <div className="settings-container">
        <h1>Settings</h1>
        <div className="settings-subcontainer">
          <h3>Difficulty</h3>
          <div className="difficulty-container">
            {difficulty === 3 ? 
              <div className="settings-button difficulty selected">Easy</div> :
              <div className="settings-button difficulty" onClick={()=>setDifficulty(3)}>Easy</div>}
            {difficulty === 5 ? 
              <div className="settings-button difficulty selected">Medium</div> :
              <div className="settings-button difficulty" onClick={()=>setDifficulty(5)}>Medium</div>}
            {difficulty === 7 ? 
              <div className="settings-button difficulty selected">Hard</div> :
              <div className="settings-button difficulty" onClick={()=>setDifficulty(7)}>Hard</div>}
          </div>
        </div>
        <div className="back-button-container">
          <div className="settings-button back" onClick={()=>setSettings(false)}>Go Back</div>
        </div> 
      </div>
    </div>
  )
}

export default Settings