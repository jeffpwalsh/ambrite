import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

import './palettelist.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Menu
          btn1='Challenge 1'
          btn2='Challenge 2 '
          btn3='Challenge 3'
          title='Ambrite Test'
          icon='fas fa-3x fa-laptop-code'
        />
        <Route exact path='/page1' component={Page1} />
        <Route exact path='/page2' component={Page2} />
        <Route exact path='/page3' component={Page3} />
      </div>
    </Router>
  );
}

export default App;
