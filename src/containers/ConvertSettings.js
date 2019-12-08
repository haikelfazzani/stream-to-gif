import React, { useState, useEffect } from 'react'
import InputNumber from '../components/InputNumber';

function ConvertSettings ({ getSettings }) {

  const [settings, setSettings] = useState({
    gifWidth: 400,
    gifHeight: 150,
    numFrames: 50,
    frameDuration: 1,
    sampleInterval: 10,
    interval: 0.1
  });

  useEffect(() => {
    getSettings(settings)
  }, [settings, setSettings])

  return (
    <div className="row mb-3">
      <InputNumber setSettings={setSettings} defaultValue="400" val='gifWidth' label="Gif width" />
      <InputNumber setSettings={setSettings} defaultValue="150" val='gifHeight' label="Gif height" />
      <InputNumber setSettings={setSettings} defaultValue="20" val='numFrames' label="number of Frames" />
      <InputNumber setSettings={setSettings} defaultValue="1" val='frameDuration' label="frame Duration" />
      <InputNumber setSettings={setSettings} defaultValue="10" val='sampleInterval' label="sample interval" />
      <InputNumber setSettings={setSettings} defaultValue="0.1" val='interval' label="interval" />
    </div>
  )
}

export default ConvertSettings
