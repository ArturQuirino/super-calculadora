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
    {
      descricao: 'Divisão dos números',
      calculo: (a, b) => {
        if (!b) {
          return 'Divisão inválida';
        }
        return a / b;
      },
    },
    {
      descricao: 'Potência dos números',
      calculo: (a, b) => {
        return a ** b;
      },
    },
    {
      descricao: 'Resto da divisão dos números',
      calculo: (a, b) => {
        if (!b) {
          return 'Divisão inválida';
        }
        return a % b;
      },
    },
  ];

  render() {
    return (
      <main>
        <div className="calculadora__container-inputs">
          <form>
            {/* <label htmlFor="primeiroNumeroInput">Primeiro Número: </label> */}
            <div class="input-field">
              <input
                id="primeiro_numero"
                type="number"
                class="validate"
                onChange={this.alterarValorNumero1}
              />
              <label htmlFor="primeiro_numero">Primeiro numero</label>
            </div>

            <div class="input-field">
              <label htmlFor="segundoNumeroInput">Segundo Número: </label>
              <input
                onChange={this.alterarValorNumero2}
                type="number"
                id="segundoNumeroInput"
                className="validate"
              ></input>
            </div>
          </form>
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
