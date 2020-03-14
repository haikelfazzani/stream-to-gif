import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import VideoToGif from './pages/VideoToGif';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ImgToGif from './pages/ImgToGif';
import CaptureImage from './pages/CaptureImage';

import './App.css';

function App () {

  return (
    <BrowserRouter>

      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/videos-converter" component={VideoToGif} />
        <Route path="/images-converter" component={ImgToGif} />
        <Route path="/capture-image" component={CaptureImage} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
