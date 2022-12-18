import React from 'react'

const ProgBar = ({progressBar}) => {
  return (
    <div className="progress-container">
    <div className="progress-bar">
      {(progressBar).map((prog, i) => (
        i === 6 ?
          <li className={"progress last " + prog}></li> : 
          <li className={"progress " + prog}></li>
      ))}
    </div>
  </div>
  )
}

export default ProgBar