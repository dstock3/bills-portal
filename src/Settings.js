import React from 'react'

const Settings = ({difficulty, setDifficulty}) => {
  return (
    <div className="settings">
        
        <div className="difficulty-container">
          {difficulty === 3 ? 
            <div className="difficulty selected">Easy</div> :
            <div className="difficulty" onClick={()=>setDifficulty(3)}>Easy</div>
          }
          {difficulty === 5 ? 
            <div className="difficulty selected">Medium</div> :
            <div className="difficulty" onClick={()=>setDifficulty(5)}>Medium</div>}
          {difficulty === 7 ? 
            <div className="difficulty selected">Hard</div> :
            <div className="difficulty" onClick={()=>setDifficulty(7)}>Hard</div>}
        </div>
    </div>
  )
}

export default Settings