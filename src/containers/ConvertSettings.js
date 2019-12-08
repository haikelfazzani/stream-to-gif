import React, { useState } from 'react'

function ConvertSettings () {

  const [settings, setSettings] = useState({});

  return (
    <div className="row mb-3">
      <div className="col-md-4">
        <input type="number" className="form-control" placeholder="Enter gif image width" />
      </div>

      <div className="col-md-4">
        <input type="number" className="form-control" placeholder="Enter number of frames" />
      </div>

      <div className="col-md-4">
        <input type="number" className="form-control" placeholder="Enter frame duration" />
      </div>
    </div>
  )
}

export default ConvertSettings
