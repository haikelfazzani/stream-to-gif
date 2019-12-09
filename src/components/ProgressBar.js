import React from 'react';

function ProgressBar ({ widthProg }) {

  return (
    <div className="progress mb-3" style={{"height": "25px"}}>
      <div className="progress-bar bg-warning" role="progressbar"
        aria-valuenow="0" aria-valuemin={widthProg} style={{ "width": widthProg }}
        aria-valuemax="100">{parseInt(widthProg) + "%"}
      </div>
    </div>
  )
}

export default ProgressBar
