import { ADDICIONAR_NUMERO } from './actions'

const initialState = {
  historico: [
    0
  ]
}

const calculadoraReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDICIONAR_NUMERO:
      const novoHistorico = state.historico;
      novoHistorico.push(action.payload);
      return { historico: novoHistorico }
    default:
      return state
  }
}

export default calculadoraReducer;