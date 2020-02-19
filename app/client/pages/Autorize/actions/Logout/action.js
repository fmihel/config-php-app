import { storage } from 'fmihel-browser-lib';
import store from 'REDUX/store';
import * as consts from './consts';

const doAction = () => (dispatch) => {
    storage.del('autorize');
    dispatch({
        type: consts.LOGOUT,
    });
};
const action = () => store.dispatch(doAction());
export default action;
