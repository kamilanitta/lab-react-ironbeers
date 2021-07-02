import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './components/Homepage';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Homepage} />
      <Route path="/beers" component={SingleBeer} />
      <Route path="/random-beers" component={RandomBeer} />
      <Route path="/new-beer" component={NewBeer} />
    </BrowserRouter>
  );
}

export default App;
