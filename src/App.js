import React, { useState } from 'react';
import gifshot from 'gifshot'
import './App.css';
import InputFile from './components/InputFile';
import ProgressBar from './components/ProgressBar';
import placeholder from './img/1.png'
import ConvertSettings from './containers/ConvertSettings';

const notes = `
interval : The amount of time (in seconds) to wait between each frame capture
frameDuration : The amount of time (10 = 1s) to stay on each frame
sampleInterval : how many pixels to skip when creating the palette. Default is 10. Less is better, but slower.
By adjusting the sample interval, you can either produce extremely high-quality images slowly, or produce good images in reasonable times.
With a sampleInterval of 1, the entire image is used in the learning phase, while with an interval of 10,
a pseudo-random subset of 1/10 of the pixels are used in the learning phase. A sampling factor of 10 gives a
substantial speed-up, with a small quality penalty.
`;

const testURL = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

function App () {
  const [vid, setVid] = useState(testURL)
  const [imgPrev, setimgPrev] = useState(placeholder);
  const [widthProg, setWidthProg] = useState('1%');
  const [settings, setSettings] = useState({})

  const handleFile = (e) => {
    //console.log(e.target.files[0]);
    setVid(window.URL.createObjectURL(e.target.files[0]));
  }

  const convertGif = () => {
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
          <video src={vid} controls></video>
        </div>

        <div className="col-md-6">
          <img src={imgPrev} alt="placeholder" />
        </div>
      </div>

      <pre className="mb-3"><code>{notes}</code></pre>

    </div>
  );
}

export default App;
