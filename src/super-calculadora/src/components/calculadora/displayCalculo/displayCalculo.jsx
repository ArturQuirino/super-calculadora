import React from 'react';

const DisplayCalculo = (props) => {
  const { numero1, numero2, descricao, calculo } = props;
  return (
    <div>
      {descricao} : {calculo(+numero1, +numero2)}
    </div>
  );
};

export default DisplayCalculo;
