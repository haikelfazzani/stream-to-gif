import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Converter from './pages/Converter';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App () {

  return (
    <BrowserRouter>

      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/converter" component={Converter} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
