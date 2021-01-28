import './polyfills';
import './scss/main.scss';
import redux from 'REDUX';
import './actions';
import './router.config';
import './router.autorize';
import '@fortawesome/fontawesome-free/js/all';
import React from 'react';
import ReacDOM from 'react-dom';
import { DOM, storage } from 'fmihel-browser-lib';
import { Provider } from 'react-redux';
import App from './App.jsx';

$(() => {
    ReacDOM.render(<Provider store={redux.store}> <App /></Provider>, DOM('#app'));
    if (storage.exist('autorize')) {
        redux.actions.Autorize(storage.get('autorize', { login: '', pass: '', enable: false }));
    }
});
