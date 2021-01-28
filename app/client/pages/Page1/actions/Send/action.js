import router from 'fmihel-php-router-client';
import redux from 'REDUX';
import * as consts from './consts';

const doAction = (msg) => (dispatch) => {
    dispatch({
        type: consts.SEND,
    });

    router({
        id: 'send',
        data: { msg },
    })
        .then((payload) => {
            dispatch({
                type: consts.SEND_OK,
                payload,
            });
        })
        .catch((payload) => {
            dispatch({
                type: consts.SEND_ERR,
                payload,
            });
        });
};
const action = (msg) => redux.store.dispatch(doAction(msg));
export default action;
