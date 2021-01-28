import redux from 'REDUX';
import reducer from './reducer';
import action from './action';

redux.add(reducer,{ Autorize :action } );
export default action;