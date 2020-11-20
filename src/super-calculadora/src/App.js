import React, {Component} from 'react';
import './App.css';
import Header from './components/header/header';
import Calculadora from './components/calculadora/calculadora';
import Sobre from './components/sobre/sobre';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/soma');
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) throw Error(body.message);
  
    return body;
  };
  
  render() {
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
}

export default App;
