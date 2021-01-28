import router from 'fmihel-php-router-client';
import { storage } from 'fmihel-browser-lib';
import redux from 'REDUX';
import * as consts from './consts';


const doAction = (autorize) => (dispatch) => {
    dispatch({
        type: consts.AUTORIZE,
    });

    router({
        id: 'autorize',
        data: autorize,
    })
        .then((payload) => {
            storage.set('autorize', payload);
            dispatch({
                type: consts.AUTORIZE_OK,
                payload,
            });
        })
        .catch((payload) => {
            storage.del('autorize');
            dispatch({
                type: consts.AUTORIZE_ERR,
                payload,
            });
        });
};
const action = (autorize) => redux.store.dispatch(doAction(autorize));
export default action;


