import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import StreamGif from './pages/StreamGif';
import Doc from './pages/Doc';
import NavBar from './components/NavBar';

function App () {

  return (
    <BrowserRouter>

      <NavBar />

      <Switch>
        <Route exact path="/" component={StreamGif} />
        <Route path="/doc" component={Doc} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
