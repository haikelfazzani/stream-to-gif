import React from 'react'

function InputNumber ({ settings, setSettings, val, label, defaultValue }) {

  const handleChange = (e) => {
    switch (val) {
      case 'numFrames':
        setSettings({ ...settings, numFrames: e.target.value })
        break;

      case 'frameDuration':
        setSettings({ ...settings, frameDuration: e.target.value })
        break;

      case 'sampleInterval':
        setSettings({ ...settings, sampleInterval: e.target.value })
        break;

      case 'interval':
        setSettings({ ...settings, interval: e.target.value })
        break;

      case 'gifHeight':
        setSettings({ ...settings, gifHeight: e.target.value })
        break;

      case 'gifWidth':
        setSettings({ ...settings, gifWidth: e.target.value })
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
        className="form-control w-100" 
        min="0"
        defaultValue={defaultValue}
      />

    </div>
  )
}

export default InputNumber
