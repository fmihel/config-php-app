import init from './init';
import Debug from './Debug/reducer';
import Logout from './Logout/reducer';


const modules = [Debug, Logout];


export const addReducer = (...args) => {
    args.forEach((module) => {
        if (typeof (module) === 'object') {
            if (Array.isArray(module)) {
                // this.add(...module);
            } else if ((('is' in module) && (typeof module.is === 'function')) && (('reducer' in module) && (typeof module.reducer === 'function'))) {
                modules.push(module);
            }
        } else {
            console.error('arg is not module', module);
        }
    });
};


const reducers = (store = init, action) => {
    const mod = modules.find((m) => m.is(action));
    if (mod) return mod.reducer(store, action);
    return store;
};


export default reducers;
