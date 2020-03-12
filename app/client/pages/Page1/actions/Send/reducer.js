import storing from 'REDUX/storing';
import * as consts from './consts';

const is = (action) => [consts.SEND, consts.SEND_OK, consts.SEND_ERR].indexOf(action.type) >= 0;
const reducer = (store, action) => {
    if (action.type === consts.SEND) {
        return storing(store)
            .idle(false)
            .store;
    }

    if (action.type === consts.SEND_OK) {
        console.info(action.payload);
        return storing(store)
            .idle(true)
            .assign({
                page1: {
                    ...action.payload,
                },
            })
            .store;
    }

    if (action.type === consts.SEND_ERR) {
        return storing(store)
            .idle(true)
            .store;
    }

    return store;
};

export default { is, reducer };
