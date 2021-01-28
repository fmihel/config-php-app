import * as consts from './consts';
import redux from 'REDUX';

const is = (action) => [consts.LOGOUT, consts.LOGOUT_OK, consts.LOGOUT_ERR].indexOf(action.type) >= 0;
const reducer = (state, action) => {
    if (action.type === consts.LOGOUT) {
        return redux.change(state)
            .extend({
                autorize: {
                    login: '',
                    pass: '',
                    uuid: '',
                    enable: false,
                },
                ui: {
                    type: 'noAutorize',
                    state: 'idle',
                },
            }).state;
    }

    return state;
};

export default { is, reducer };
