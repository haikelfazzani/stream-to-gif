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

      case 'gifHeight':
        setSettings({ gifHeight: e.target.value })
        break;

      default:
        setSettings({ gifWidth: e.target.value })
        break;
    }
  }

  return (
    <div className="col-md-3">

      <label htmlFor={label}>{label}</label>

      <input type="number"
        onChange={handleChange}
        className="form-control" placeholder="Enter gif image width"
        defaultValue={defaultValue}
      />

    </div>
  )
}

export default InputNumber
