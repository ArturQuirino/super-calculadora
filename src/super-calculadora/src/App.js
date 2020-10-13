import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Calculadora from './components/calculadora/calculadora';

function App() {
  return (
    <div className="App">
      <Header autor="Artur"></Header>
      <Calculadora></Calculadora>
    </div>
  );
}

export default App;
