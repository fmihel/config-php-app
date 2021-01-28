import redux from 'REDUX';
import reducer from './reducer';
import action from './action';

redux.add(reducer,{ Logout :action } );
export default action;