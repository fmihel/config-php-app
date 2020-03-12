import _ from 'lodash';
import init from './init';

class Inside {
    static type(a) {
        if (a === null) return 'null';
        const res = typeof (a);
        return ((res === 'object') && (Array.isArray(a))) ? 'array' : res;
    }

    static eq(a, b) {
        try {
            let res = true;
            const aType = Inside.type(a);
            const bType = Inside.type(b);

            if (aType !== bType) { return false; }

            if (aType === 'array') {
                if (a.length !== b.length) { return false; }
                for (let i = 0; i < a.length; i++) {
                    res = Inside.eq(a[i], b[i]);
                    if (!res) { return false; }
                }
            } else
            if (aType === 'object') {
                if ((b === {}) && (b !== a)) { return false; }

                const keys = Object.keys(b);

                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];

                    if (!(key in a)) { return false; }

                    if (!Inside.eq(a[key], b[key])) { return false; }
                }
            } else
            if (a !== b) { return false; }

            return true;
        } catch (e) {
            console.log('ERROR>> Inside.eq ', 'a=', a, 'b=', b);
            console.error(e);
            return false;
        }
    }
}

class Data {
    constructor() {
        this.cond = {};
        this.init = init;
    }

    /**
    * метод добавления инициализирующих данных в начальную структуру.
    * добавление осуществляется только в случае, если не такого же поля в исходной структуре init, в противном случае выбрасывает исключение
    * и данные не добавляются
    * @param {object} data
    */
    attach(data) {
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
    }

    /**
     *
     * @param {*} o
     * @param {*} key
     */
    changing(o, key, param = {}) {
        const p = { clone: true, ...param };
        if (!(key in this.cond) || (!Inside.eq(this.cond[key], o))) {
            // this.cond[key] = $.extend(true, {}, o);
            this.cond[key] = p.clone ? _.cloneDeep(o) : o;
            return true;
        }

        return false;
    }
}

const out = new Data();
export default out;
