import { storage } from 'fmihel-browser-lib';
import * as consts from './consts';
import store from '../store';

const doAction = () => (dispatch) => {
    storage.del('autorize');
    dispatch({
        type: consts.LOGOUT,
    });
};
const action = () => store.dispatch(doAction());
export default action;
