import init from './init';

const modules = [];
// set folder name which consist action ----------------------
const paths = ['autorize', 'logout'];
// -----------------------------------------------------------
paths.forEach((path) => {
    import(`./${path}/reducer`)
        .then((m) => modules.push(m.default))
        .catch((e) => { console.error(e); });
});

function reducers(store = init, action) {
    const mod = modules.find((m) => m.is(action));
    if (mod) return mod.reducer(store, action);
    return store;
}
export default reducers;
