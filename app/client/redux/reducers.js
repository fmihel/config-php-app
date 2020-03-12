import init from './init';

const modules = [];

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
    if (webpack.isDevelopment) { console.error(`not define reducer for [${action.type}]. `); }

    return store;
};


export default reducers;
