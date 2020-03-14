import React, { useState, useRef } from 'react';

import InputFile from '../components/InputFile';

const testURL = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function CaptureImage () {

  const [state, setState] = useState({ video: testURL, capturedImg: null });

  const canvasRef = useRef();
  const videoRef = useRef();

  const handleFile = (e) => {
    setState({ ...state, video: window.URL.createObjectURL(e.target.files[0]) });
  }

  const capture = () => {
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    canvasRef.current.getContext('2d')
      .drawImage(videoRef.current, 0, 0, videoRef.current.videoWidth, videoRef.current.videoHeight);

    canvasRef.current.toBlob((blob) => {
      let url = window.URL.createObjectURL(blob);
      setState({ ...state, capturedImg: url });
      // window.URL.revokeObjectURL(url);
    }, 'image/png', 1);

    //setState({...state, capturedImg: canvasRef.current.toDataURL("image/png")})    
  }

  return (<div className="container py-5">

    <h3 className="title mb-3"><i className="fas fa-camera"></i> Capture Image From Video</h3>

    <InputFile handleFile={handleFile} />

    <div className="row">
      <div className="col-md-6">
        <video ref={videoRef} src={state.video} className="img-fluid" crossOrigin="anonymous" controls></video>
      </div>

      <div className="col-md-6 mb-3">

        <div className="h-100 dash-border d-flex justify-content-center align-items-center mb-3">
          <canvas ref={canvasRef}></canvas>
        </div>

      </div>
    </div>

    <button className="btn btn-primary btn-lg mr-2" onClick={capture}>
      <i className="fas fa-camera"></i> Capture
    </button>

    {state.capturedImg && <a href={state.capturedImg} 
    className="btn btn-success btn-lg" 
    download="streamgif.png"><i className="fas fa-download"></i> Download</a>}

  </div>);
}