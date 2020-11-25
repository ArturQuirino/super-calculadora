import { createStore } from 'redux';
import calculadoraReducer from './reducers';


const store = createStore(calculadoraReducer);

export default store;
