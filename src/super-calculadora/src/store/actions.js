export const ADDICIONAR_NUMERO = 'ADDICIONAR_NUMERO';

export const addNumeroHistorico = (numero) => ({
  type: ADDICIONAR_NUMERO,
  payload: numero,
});
