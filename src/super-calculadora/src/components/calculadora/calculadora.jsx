import React, { Component } from 'react';
import DisplayCalculo from './displayCalculo/displayCalculo';
import './calculadora.css';

class Calculadora extends Component {
  state = { numero1: 0, numero2: 0 };

  alterarValorNumero1 = (event) => {
    this.setState({ numero1: event.target.value });
  };

  alterarValorNumero2 = (event) => {
    this.setState({ numero2: event.target.value });
  };

  calculos = [
    {
      descricao: 'Soma dos números',
      calculo: (a, b) => {
        return a + b;
      },
    },
    {
      descricao: 'Subtração dos números',
      calculo: (a, b) => {
        return a - b;
      },
    },
    {
      descricao: 'Multiplicação dos números',
      calculo: (a, b) => {
        return a * b;
      },
    },
  ];

  render() {
    return (
      <main>
        <div className="calculadora__container-inputs">
          <label htmlFor="primeiroNumeroInput">Primeiro Número: </label>
          <label htmlFor="segundoNumeroInput">Segundo Número: </label>
          <input
            onChange={this.alterarValorNumero1}
            type="number"
            name="primeiroNumeroInput"
          ></input>
          <input
            onChange={this.alterarValorNumero2}
            type="number"
            name="segundoNumeroInput"
          ></input>
        </div>
        <div>
          {this.calculos.map((calculo) => (
            <DisplayCalculo
              numero1={this.state.numero1}
              numero2={this.state.numero2}
              descricao={calculo.descricao}
              calculo={calculo.calculo}
            ></DisplayCalculo>
          ))}
        </div>
      </main>
    );
  }
}

export default Calculadora;
