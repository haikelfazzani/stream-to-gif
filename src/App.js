import React, { useState } from 'react';
import gifshot from 'gifshot'
import './App.css';
import InputFile from './components/InputFile';
import ProgressBar from './components/ProgressBar';
import placeholder from './img/1.png'
import ConvertSettings from './containers/ConvertSettings';

const testURL = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

function App () {
  const [vid, setVid] = useState(testURL)
  const [imgPrev, setimgPrev] = useState(placeholder);
  const [widthProg, setWidthProg] = useState('1%');

  const handleFile = (e) => {
    //console.log(e.target.files[0]);
    setVid(window.URL.createObjectURL(e.target.files[0]));
  }

  const convertGif = () => {
    gifshot.createGIF({
      gifWidth: 400,
      video: vid,
      interval: 0.1,
      numFrames: 20,
      frameDuration: 1,
      fontWeight: 'normal',
      fontSize: '16px',
      fontFamily: 'sans-serif',
      fontColor: '#ffffff',
      textAlign: 'center',
      textBaseline: 'bottom',
      sampleInterval: 10,
      numWorkers: 2,
      progressCallback
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

  return (
    <div className="container py-5">

      <div className="form-group mb-3">
        <input type="text" className="form-control" placeholder="Enter url" onChange={urlChange} />
        <small className="form-text text-muted">Example: {testURL}</small>
      </div>

      <InputFile handleFile={handleFile} />

      <ConvertSettings />

      <button onClick={convertGif} className="btn btn-primary w-100 btn-lg mb-3">convert</button>

      <ProgressBar widthProg={widthProg} />


      <div className="row">
        <div className="col-md-6">
          <video src={vid} controls></video>
        </div>

        <div className="col-md-6">
          <img src={imgPrev} alt="placeholder" />
        </div>
      </div>

    </div>
  );
}

export default App;
