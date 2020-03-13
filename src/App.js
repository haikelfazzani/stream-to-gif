import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import VideoToGif from './pages/VideoToGif';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ImgToGif from './pages/ImgToGif';

function App () {

  return (
    <BrowserRouter>

      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/videos" component={VideoToGif} />
        <Route path="/images" component={ImgToGif} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
