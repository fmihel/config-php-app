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
};

export default init;
