import * as consts from './consts';

const is = (action) => [consts.AUTORIZE, consts.AUTORIZE_OK, consts.AUTORIZE_ERR].indexOf(action.type) >= 0;
const reducer = (store, action) => {
    if (action.type === consts.AUTORIZE) {
        return {
            ...store,
            ui: {
                ...store.ui,
                state: 'wait',
            },
            autorize: {
                ...store.autorize,
            },

        };
    }

    if (action.type === consts.AUTORIZE_OK) {
        return {
            ...store,
            ui: {
                ...store.ui,
                type: 'autorize',
                state: 'idle',
            },
            autorize: {
                ...store.autorize,
                ...action.payload,
                msg: undefined,
            },

        };
    }

    if (action.type === consts.AUTORIZE_ERR) {
        return {
            ...store,
            ui: {
                ...store.ui,
                type: 'noAutorize',
                state: 'idle',
            },
            autorize: {
                ...store.autorize,
                enable: false,
                login: '',
                pass: '',
                msg: action.payload.msg,
            },
        };
    }

    return store;
};

export default { is, reducer };
