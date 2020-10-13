import React, { Component } from 'react';

class Calculadora extends Component {
  state = { numero1: 0, numero2: 0 };

  alterarValorNumero1 = (event) => {
    this.setState({ numero1: event.target.value });
  };

  alterarValorNumero2 = (event) => {
    this.setState({ numero2: event.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <label>Primeiro Número: </label>
          <input onChange={this.alterarValorNumero1}></input>
          <label>Segundo Número: </label>
          <input onChange={this.alterarValorNumero2}></input>
        </div>
        <div>
          <span>
            Soma dos números: {+this.state.numero1 + +this.state.numero2}
          </span>
          <span>
            Subtração dos números: {+this.state.numero1 + +this.state.numero2}
          </span>
        </div>
      </div>
    );
  }
}

export default Calculadora;
