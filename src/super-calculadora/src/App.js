import React from 'react';
import './App.css';
import Header from './components/header/header';
import Calculadora from './components/calculadora/calculadora';
import Sobre from './components/sobre/sobre';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header autor="Artur"></Header>
        <Switch>
          <Route path="/sobre">
            <Sobre></Sobre>
          </Route>
          <Route path="/">
            <Calculadora></Calculadora>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
