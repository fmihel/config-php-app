import { storage } from 'fmihel-browser-lib';

const autorize = storage.get('autorize', {
    default: {
        enable: false, login: '', pass: '', id: -1,
    },
});
const init = {
    ui: {
        scheme: 'dark',
        type: autorize.enable ? 'Loading' : 'noAutorize', //
        state: 'idle',
    },
    debug: {
        list: {
            debug: 'text',
            next: 'next',
        },
    },
    autorize: {
        enable: false,
        login: '',
        pass: '',
        uuid: '',
        msg: '',

    },
};

export default init;
