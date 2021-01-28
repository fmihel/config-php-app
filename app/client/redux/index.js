import { Redux } from 'fmihel-redux-wrapper';
import { storage } from 'fmihel-browser-lib';
import MyStoring from './storing';
import { connect } from 'react-redux';

class MyRedux extends Redux{
    connect(...arg){
        return connect(...arg);
    }
}
const autorize = storage.get('autorize', {
    default: {
        enable: false, login: '', pass: '', id: -1,
    },
});

const init = {
    ui: {
        scheme: 'dark',
        type: autorize.enable ? 'Loading' : 'noAutorize', 
        state: 'idle',
    },
    autorize: {
        enable: false,
        login: '',
        pass: '',
        uuid: '',
        msg: '',
    },
};

const redux = new MyRedux(init,MyStoring);

export default redux;