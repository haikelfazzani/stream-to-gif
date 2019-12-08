import React, { useState } from 'react';
import gifshot from 'gifshot'
import InputFile from '../components/InputFile';
import ProgressBar from '../components/ProgressBar';
import placeholder from '../img/1.png'
import ConvertSettings from '../containers/ConvertSettings';

const testURL = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function StreamGif () {

  const [vid, setVid] = useState(testURL)
  const [imgPrev, setimgPrev] = useState(placeholder);
  const [widthProg, setWidthProg] = useState('1%');
  const [settings, setSettings] = useState({})

  const handleFile = (e) => {
    //console.log(e.target.files[0]);
    setVid(window.URL.createObjectURL(e.target.files[0]));
  }

  const convertGif = () => {
    console.log(settings);
    
    gifshot.createGIF({
      ...settings,
      video: vid,
      fontWeight: 'normal',
      fontSize: '16px',
      fontFamily: 'sans-serif',
      fontColor: '#ffffff',
      textAlign: 'center',
      textBaseline: 'bottom',
      numWorkers: 2,
      progressCallback, completeCallback
    }, function (obj) {
      if (!obj.error) {
        setimgPrev(obj.image)
      }
    });
  }

  const urlChange = (e) => {
    setVid(e.target.value);
  }

  const progressCallback = (captureProgress) => {
    setWidthProg((captureProgress * 100) + '%');
  }

  const completeCallback = () => {
    console.log('completed');
  }

  const getSettings = (userSettings) => {
    setSettings(userSettings);
  }

  return (
    <div className="container py-5">

      <div className="form-group mb-3">
        <input type="text" className="form-control" placeholder="Enter url" onChange={urlChange} />
        <small className="form-text text-muted">Example: {testURL}</small>
      </div>

      <InputFile handleFile={handleFile} />

      <ConvertSettings getSettings={getSettings} />

      <button onClick={convertGif} className="btn btn-primary w-100 btn-lg mb-3">convert</button>

      <ProgressBar widthProg={widthProg} />


      <div className="row mb-3">
        <div className="col-md-6">
          <video src={vid} className="img-fluid" controls></video>
        </div>

        <div className="col-md-6">
          <img src={imgPrev} alt="placeholder" className="img-fluid"
            width={settings.gifWidth ? settings.gifWidth : '400'}
            height={settings.gifHeight ? settings.gifHeight : '400'}
          />
        </div>
      </div>

    </div>
  )
}