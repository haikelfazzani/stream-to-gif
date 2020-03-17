import React, { useState } from 'react';
import gifshot from 'gifshot'
import InputFile from '../components/InputFile';
import ProgressBar from '../components/ProgressBar';
import ConvertSettings from '../containers/ConvertSettings';
import Doc from '../components/Doc';
import Image from '../components/Image';
import ImgModal from '../components/ImgModal';

const imgTypes  = ['image/gif', 'image/png', 'image/jpg', 'image/jpeg', 'image/bmp', 'image/webp', 'image/tiff', 'image/tif', 'image/apng', 'image/ico'];

export default function Converter () {

  const [userImages, setUserImages] = useState([
    'https://i.ibb.co/tMr7cNC/py1.jpg',
    'https://i.ibb.co/vYZq5zb/code.jpg',
    'https://i.ibb.co/MkBGVjw/challenge.png'
  ]);
  const [imgPrev, setimgPrev] = useState("");
  const [widthProg, setWidthProg] = useState('0%');
  const [settings, setSettings] = useState({})
  const [disableBtnConvert, setDisableBtnConvert] = useState(false);
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);

  const handleFile = (e) => {

    let imgFiles = Object.values(e.target.files).filter(o => imgTypes.includes(o.type));

    if(imgFiles.length > 0) { 
      let imgUrls = imgFiles.map(file => window.URL.createObjectURL(file));
      setUserImages(imgUrls); 
      setDisableBtnConvert(false);
    }
    else { setDisableBtnConvert(true); }
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

  const onRmImg = (imgIdx) => {
    let filtredImgs = userImages.filter((img, idx) => idx !== imgIdx);
    setUserImages(filtredImgs);
  }

  const openImgModal = () => { setIsImgModalOpen(true) }

  return (
    <div className="container py-5">

      <h3 className="title mb-3"><i className="fas fa-file-image"></i> Images Converter</h3>

      <InputFile handleFile={handleFile} multiple="multiple" />

      <div className="w-100 box-shad p-20 mb-5">
        <ConvertSettings getSettings={getSettings} />

        <button onClick={convertGif} className="btn btn-primary w-100 btn-lg mb-3" disabled={disableBtnConvert}>
          <i className="fas fa-cogs"></i> convert images to gif
        </button>

        <ProgressBar widthProg={widthProg} />
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <div className="row">
            {userImages && userImages.map((img, i) => <div key={'img' + i} className="col-md-4">
              <Image src={img} />
              <button className="btn btn-light btn-download" onClick={() => { onRmImg(i) }}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>)}
          </div>
        </div>

        <div className="col-md-6 mb-3">

          <div className="frame-output h-100 dash-border d-flex justify-content-center align-items-center mb-3">
            {imgPrev
              ? <img src={imgPrev} alt="placeholder" className="img-fluid w-100"
                width={settings.gifWidth}
                height={settings.gifHeight} 
                onClick={openImgModal} />
              : <h3 className="text-muted">Gif output will be here</h3>}

            {widthProg === '100%' &&
              <a href={imgPrev} className="btn btn-light btn-lg btn-download" download>
                <i className="fas fa-download"></i>
              </a>}
          </div>

        </div>
      </div>

      <Doc />

      {imgPrev
        && <ImgModal
          url={imgPrev}
          show={isImgModalOpen}
          setShow={setIsImgModalOpen}
        />}
    </div>
  )
}
