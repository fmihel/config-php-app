import * as consts from './consts';
import store from '../store';

const doAction = (list) => (dispatch) => {
    dispatch({
        type: consts.DEBUG,
        payload: list,
    });
};
const action = (list) => store.dispatch(doAction(list));
export default action;
