import './scss/main.scss';
import './router.config';
import './router.autorize';
import React from 'react';
import ReacDOM from 'react-dom';
import { DOM, storage } from 'fmihel-browser-lib';
import { Provider } from 'react-redux';
import store from 'REDUX/store';
import autorize from 'REDUX/autorize/action';
import App from './App.jsx';


$(() => {
    ReacDOM.render(<Provider store={store}> <App /></Provider>, DOM('#app'));
    if (storage.exist('autorize')) {
        const a = storage.get('autorize');
        console.info(a);
        autorize(a);
    }
});
