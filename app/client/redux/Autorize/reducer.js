import * as consts from './consts';
import storing from '../storing';

const is = (action) => [consts.AUTORIZE, consts.AUTORIZE_OK, consts.AUTORIZE_ERR].indexOf(action.type) >= 0;
const reducer = (store, action) => {
    if (action.type === consts.AUTORIZE) {
        return storing(store).idle(false).store;
    }


    if (action.type === consts.AUTORIZE_OK) {
        return storing(store)
            .idle(true)
            .assignTo('ui', { type: 'autorize' })
            .assignTo('autorize', { ...action.payload, msg: undefined })
            .store;
        /*
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
        */
    }

    if (action.type === consts.AUTORIZE_ERR) {
        return storing(store)
            .idle(true)
            .assignTo('ui', { type: 'noAutorize' })
            .assignTo('autorize', {
                enable: false,
                login: '',
                pass: '',
                msg: action.payload.msg,
            })
            .store;
        /*
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
        */
    }

    return store;
};

export default { is, reducer };
