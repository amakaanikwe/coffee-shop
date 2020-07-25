import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers'
import './index.css';
import App from './App';

const initialStore = {
    count: 0
}

const store = createStore(reducer, initialStore);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));





