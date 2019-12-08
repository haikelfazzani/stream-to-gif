import React from 'react'

function ProgressBar ({ widthProg }) {


  return (
    <div className="myProgress mb-3">
      <div className="myBar" style={{ width: widthProg }}></div>
    </div>
  )
}

export default ProgressBar
