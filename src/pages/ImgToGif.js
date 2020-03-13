import React, { useState } from 'react';
import gifshot from 'gifshot'
import InputFile from '../components/InputFile';
import ProgressBar from '../components/ProgressBar';
import ConvertSettings from '../containers/ConvertSettings';
import Doc from '../components/Doc';
import Image from '../components/Image';

export default function Converter () {

  const [userImages, setUserImages] = useState([
    'https://i.ibb.co/tMr7cNC/py1.jpg',
    'https://i.ibb.co/vYZq5zb/code.jpg',
    'https://i.ibb.co/MkBGVjw/challenge.png'
  ]);
  const [imgPrev, setimgPrev] = useState("");
  const [widthProg, setWidthProg] = useState('0%');
  const [settings, setSettings] = useState({})

  const handleFile = (e) => {
    let files = Object.values(e.target.files).map(file => window.URL.createObjectURL(file));
    setUserImages(files);
  }

  const convertGif = () => {

    setimgPrev("");

    gifshot.createGIF({
      ...settings,
      images: userImages,
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
        setimgPrev(obj.image); 
      }
    });
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

      <InputFile handleFile={handleFile} multiple="multiple" />

      <div className="w-100 box-shad p-20 mb-5">
        <ConvertSettings getSettings={getSettings} />

        <button onClick={convertGif} className="btn btn-primary w-100 btn-lg mb-3">
          <i className="fas fa-cogs"></i> convert to gif
        </button>

        <ProgressBar widthProg={widthProg} />
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <div className="row">
            {userImages && userImages.map((img, i) => <div key={'img' + i} className="col-md-4">
              <Image src={img} />
            </div>)}
          </div>
        </div>

        <div className="col-md-6 mb-3">

          <div className="h-100 dash-border d-flex justify-content-center align-items-center mb-3">
            {imgPrev ? <img src={imgPrev} alt="placeholder" className="img-fluid"
              width={settings.gifWidth}
              height={settings.gifHeight}
            /> : <h3 className="text-muted">Gif output will be here</h3>}

          </div>

          {widthProg === '100%' &&
            <a href={imgPrev} className="btn btn-success btn-lg" download>
              <i className="fas fa-download"></i> Download
            </a>}

        </div>
      </div>

      <Doc />
    </div>
  )
}
