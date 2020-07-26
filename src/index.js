import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers'
import './index.css';
import App from './App';
import coffeedata from "./inventory/coffeedata.json";
import treatsdata from "./inventory/treatsdata.json";
import { GET_AMOUNT } from './redux/actions';

const initialStore = {
    coffeeMenu: coffeedata,
    treatsMenu: treatsdata,
    total: 0,
    amount: 0

}

const store = createStore(reducer, initialStore);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));





