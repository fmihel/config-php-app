import { storage } from 'fmihel-browser-lib';
import redux from 'REDUX';
import * as consts from './consts';

const doAction = () => (dispatch) => {
    storage.del('autorize');
    dispatch({
        type: consts.LOGOUT,
    });
};
const action = () => redux.store.dispatch(doAction());
export default action;

