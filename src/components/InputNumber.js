import React from 'react'

function InputNumber ({ setSettings, val, label, defaultValue }) {

  const handleChange = (e) => {
    switch (val) {
      case 'numFrames':
        setSettings({ numFrames: e.target.value })
        break;

      case 'frameDuration':
        setSettings({ frameDuration: e.target.value })
        break;

      case 'sampleInterval':
        setSettings({ sampleInterval: e.target.value })
        break;

      case 'interval':
        setSettings({ interval: e.target.value })
        break;

      case 'gifHeight':
        setSettings({ gifHeight: e.target.value })
        break;

      case 'gifWidth':
        setSettings({ gifWidth: e.target.value })
        break;

      default:        
        break;
    }
  }

  return (
    <div className="col-md-2">

      <label htmlFor={label}>{label}</label>

      <input type="number"
        onChange={handleChange}
        className="form-control w-100" placeholder="Enter gif image width"
        defaultValue={defaultValue}
      />

    </div>
  )
}

export default InputNumber
