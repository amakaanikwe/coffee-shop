import React from 'react';
import ReactDOM from 'react-dom';
import coffeedata from "./inventory/coffeedata.json";
import treatsdata from "./inventory/treatsdata.json";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers'
import './index.css';
import App from './App';

const initialState = {
    coffeeMenu: coffeedata,
    treatsMenu: treatsdata,
    turnCompToggleOn: true,
    total: 0,
    amount: 0

}


const store = createStore(reducer, initialState);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));





