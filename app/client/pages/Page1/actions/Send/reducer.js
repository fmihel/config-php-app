import redux from 'REDUX';
import * as consts from './consts';

const is = (action) => [consts.SEND, consts.SEND_OK, consts.SEND_ERR].indexOf(action.type) >= 0;
const reducer = (state, action) => {
    if (action.type === consts.SEND) {
        return redux.change(state)
            .idle(false)
            .state;
    }

    if (action.type === consts.SEND_OK) {
        console.info(action.payload);
        return redux.change(state)
            .idle(true)
            .extend({
                page1: {
                    ...action.payload,
                },
            })
            .state;
    }

    if (action.type === consts.SEND_ERR) {
        return redux.change(state)
            .idle(true)
            .state;
    }

    return state;
};

export default { is, reducer };
