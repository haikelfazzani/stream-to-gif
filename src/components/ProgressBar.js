import React from 'react';

function ProgressBar ({ widthProg }) {

  return (
    <div className="progress" style={{"height": "25px"}}>
      <div className="progress-bar bg-success" role="progressbar"
        aria-valuenow="0" aria-valuemin={widthProg} style={{ "width": widthProg }}
        aria-valuemax="100">{parseInt(widthProg) + "%"}
      </div>
    </div>
  )
}

export default ProgressBar
