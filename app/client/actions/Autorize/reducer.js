import redux from 'REDUX';
import * as consts from './consts';

const is = (action) => [consts.AUTORIZE, consts.AUTORIZE_OK, consts.AUTORIZE_ERR].indexOf(action.type) >= 0;
const reducer = (state, action) => {
    if (action.type === consts.AUTORIZE) {
        return redux.change(state).idle(false).state;
    }


    if (action.type === consts.AUTORIZE_OK) {
       return redux.change(state)
            .idle(true)
            .extend({ui: { type: 'autorize' }})
            .extend({autorize: { ...action.payload, msg: undefined} })
            .state;
    }

    if (action.type === consts.AUTORIZE_ERR) {
        return redux.change(state)
            .idle(true)
            .extend({ui: { type: 'noAutorize'} })
            .extend({autorize: {
                enable: false,
                login: '',
                pass: '',
                msg: action.payload.msg,
            }})
            .state;
    }

    return state;
};

export default { is, reducer };

redux