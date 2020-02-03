import * as consts from './consts';

const is = (action) => [consts.DEBUG].indexOf(action.type) >= 0;
const reducer = (store, action) => {
    if (action.type === consts.DEBUG) {
        return {
            ...store,
            debug: {
                ...store.debug,
                list: { ...store.debug.list, ...action.payload },
            },
        };
    }


    return store;
};

export default { is, reducer };
