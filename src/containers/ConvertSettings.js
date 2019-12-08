import React, { useState, useEffect } from 'react'
import InputNumber from '../components/InputNumber';

function ConvertSettings ({ getSettings }) {

  const [settings, setSettings] = useState({
    gifWidth: 400,
    gifHeight: 200,
    numFrames: 50,
    frameDuration: 1
  });

  useEffect(() => {
    getSettings(settings)
  }, [settings, setSettings])

  return (
    <div className="row mb-3">
      <InputNumber setSettings={setSettings} defaultValue="400" val='gifWidth' label="Gif width" />
      <InputNumber setSettings={setSettings} defaultValue="200" val='gifHeight' label="Gif height" />
      <InputNumber setSettings={setSettings} defaultValue="20" val='numFrames' label="number of Frames" />
      <InputNumber setSettings={setSettings} defaultValue="1" val='frameDuration' label="frame Duration" />
    </div>
  )
}

export default ConvertSettings
