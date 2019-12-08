import React, { useState, useEffect } from 'react'
import InputNumber from '../components/InputNumber';

function ConvertSettings ({ getSettings }) {

  const [settings, setSettings] = useState({
    gifWidth: 400,
    gifHeight: 180,
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

      <InputNumber
        settings={settings}
        setSettings={setSettings}
        defaultValue="400"
        val='gifWidth'
        label="Gif width"
      />


      <InputNumber
        settings={settings}
        setSettings={setSettings}
        defaultValue="180"
        val='gifHeight'
        label="Gif height"
      />


      <InputNumber
        settings={settings}
        setSettings={setSettings}
        defaultValue="20"
        val='numFrames'
        label="number of Frames"
      />


      <InputNumber settings={settings}
        setSettings={setSettings} defaultValue="1" val='frameDuration' label="frame Duration" />


      <InputNumber settings={settings}
        setSettings={setSettings} defaultValue="10" val='sampleInterval' label="sample interval" />


      <InputNumber settings={settings}
        setSettings={setSettings} defaultValue="0.1" val='interval' label="interval" />
    </div>
  )
}

export default ConvertSettings
