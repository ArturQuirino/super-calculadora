import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sobre extends Component {
  render() {
    return (
      <article>
        Esta é uma supercalculadora desenvovlida pelos alunos da UFV
        <div>{this.props.historico}</div>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    historico: state.historico,
  };
};

export default connect(mapStateToProps)(Sobre);
