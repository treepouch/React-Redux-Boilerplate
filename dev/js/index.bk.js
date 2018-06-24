import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import allVH1Reducers from './reducers/all';
import AppVH1 from './components/app-vh1';


const store = createStore(allVH1Reducers);

ReactDOM.render(
   <Provider store={store}>
    <AppVH1 />
    </Provider>
    ,
    document.getElementById('root')
);
