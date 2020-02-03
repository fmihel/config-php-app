import * as consts from './consts';

const is = (action) => [consts.LOGOUT, consts.LOGOUT_OK, consts.LOGOUT_ERR].indexOf(action.type) >= 0;
const reducer = (store, action) => {
    if (action.type === consts.LOGOUT) {
        return {
            ...store,
            autorize: {
                login: '',
                pass: '',
                uuid: '',
                enable: false,
            },
            ui: {
                ...store.ui,
                type: 'noAutorize',
                state: 'idle',
            },
        };
    }

    return store;
};

export default { is, reducer };
