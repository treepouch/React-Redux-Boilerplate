import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import allReducers from './reducers';
import AppMTV from './components/app-mtv';


const store = createStore(allReducers);

ReactDOM.render(
   <Provider store={store}>
    <AppMTV />
    </Provider>
    ,
    document.getElementById('root')
);
