import { storage } from 'fmihel-browser-lib';

const autorize = storage.get('autorize', {
    default: {
        enable: false, login: '', pass: '', id: -1,
    },
});
const init = {
    ui: {
        scheme: 'dark',
        type: autorize.enable ? 'Loading' : 'noAutorize', //
        state: 'idle',
    },
};

/**
 * метод добавления инициализирующих данных в начальную структуру.
 * добавление осуществляется только в случае, если не такого же поля в исходной структуре init, в противном случае выбрасывает исключение
 * и данные не добавляются
 * @param {object} data
 */
export const attach = (data) => {
    const keysData = Object.keys(data);
    const keysInit = Object.keys(init);
    for (let i = 0; i < keysData.length; i++) {
        if (keysInit.includes(keysData[i])) {
            const msg = `Can\`t add data to init struct, duplicate field "${keysData[i]}" in init.`;
            console.group('duplicate field');
            console.error(msg);
            console.error('data', data);
            console.error('init', init);
            console.groupEnd('duplicate field');
            throw msg;
        }
    }
    keysData.forEach((key) => { init[key] = data[key]; });
};

export default init;
