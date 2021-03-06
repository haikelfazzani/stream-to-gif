import React from 'react';
import '../styles/Home.css';
import preview from '../img/preview.gif';
import { Link } from 'react-router-dom';

export default function Home () {
  return (<>

    <section className="py-5">
      <div className="container home">
        <div className="row py-5">
          <div className="col-md-6 flex-col">
            <h6 className="m-0">With Streamgif, turn</h6>
            <h1>Images or Video to gif</h1>

            <h4>Speed, meet simplicity and open source</h4>
            <p className="mt-0">Generate a beautiful gif images with one click.</p>
            <Link className="btn btn-primary btn-lg w-50" to="/videos-converter">
              <span className="mr-2">Get started now</span> <i className="fas fa-play"></i>
            </Link>
          </div>

          <div className="col-md-6">
            <img src={preview} alt="preview" />
          </div>

        </div>
      </div>
    </section>

    <div className="container home mt-5">
      <h2 className="text-center mt-5">Our Features</h2>
      <p className="text-center">For whatever reason you need gif converter, we have got you covered!</p>

      <div className="row py-5 text-center">
        <div className="col-md-4 border">
          <h2><i className="fas fa-expand"></i></h2>
          <h3>Resize</h3>
          <p className="m-0">You can specify the width and the height of the gif image output.</p>
        </div>

        <div className="col-md-4 border">
          <h2><i className="fas fa-images"></i></h2>
          <h3>Choose quality</h3>
          <p className="m-0">You can choose the quality of the gif image by changing the frame duration, sample interval and interval.</p>
        </div>

        <div className="col-md-4 border">
          <h2><i className="fas fa-window-restore"></i></h2>
          <h3>Choose format</h3>
          <p className="m-0">Convert images or video to gif image.</p>
        </div>

      </div>

    </div>
  </>);
}