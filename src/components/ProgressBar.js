import React from 'react';
import '../styles/progress.css'

function ProgressBar ({ widthProg }) {


  return (
    <div className="myProgress mb-3">
      <div className="myBar" style={{ width: widthProg }}></div>
    </div>
  )
}

export default ProgressBar
