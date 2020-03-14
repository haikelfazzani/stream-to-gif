import React, { useState } from 'react';
import gifshot from 'gifshot'
import InputFile from '../components/InputFile';
import ProgressBar from '../components/ProgressBar';
import ConvertSettings from '../containers/ConvertSettings';
import Doc from '../components/Doc';

const testURL = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function VideoToGif () {

  const [vid, setVid] = useState(testURL)
  const [imgPrev, setimgPrev] = useState("");
  const [widthProg, setWidthProg] = useState('0%');
  const [settings, setSettings] = useState({})

  const handleFile = (e) => {
    setVid(window.URL.createObjectURL(e.target.files[0]));
  }

  const convertGif = () => {
    setimgPrev('');

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
      setimgPrev(!obj.error ? obj.image : '');
    });
  }

  const urlChange = (e) => {
    setVid(e.target.value);
  }

  const progressCallback = (captureProgress) => {
    setWidthProg((captureProgress * 100) + '%');
    if (captureProgress === 1) {
      setTimeout(() => { setWidthProg(200 + '%'); }, 3000);
    }
  }

  const completeCallback = () => {
    console.log('completed');
  }

  const getSettings = (userSettings) => {
    setSettings(userSettings);
  }

  return (
    <div className="container py-5">

      <h3 className="title mb-3"><i className="fas fa-file-video"></i> Video Converter</h3>

      <div className="form-group mb-3">
        <input type="text" className="form-control" placeholder="Enter an url or drop file.." onChange={urlChange} />
        <small className="form-text text-muted">Example: {testURL}</small>
      </div>

      <InputFile handleFile={handleFile} />

      <div className="w-100 box-shad p-20 mb-5">
        <ConvertSettings getSettings={getSettings} />

        <button onClick={convertGif} className="btn btn-primary w-100 btn-lg mb-3">
          <i className="fas fa-cogs"></i> convert video to gif
        </button>

        <ProgressBar widthProg={widthProg} />
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <video src={vid} className="img-fluid" controls></video>
        </div>

        <div className="col-md-6 mb-3">

          <div className="h-100 dash-border d-flex justify-content-center align-items-center mb-3">
            {imgPrev
              ? <img src={imgPrev} alt="placeholder" className="img-fluid"
                width={settings.gifWidth}
                height={settings.gifHeight} />
              : <h3 className="text-muted">Gif output will be here</h3>}

          </div>

          {widthProg === '200%' &&
            <a href={imgPrev} className="btn btn-success btn-lg" download>
              <i className="fas fa-download"></i> Download
            </a>}

        </div>
      </div>

      <Doc />
    </div>
  )
}
