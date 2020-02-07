import init from './init';

class Storing {
    constructor() {
        this.store = init;
        return this;
    }

    /**
     * Включает ошибку в объект
     * если для нее предусмотрен раздел, в противном случае добавляет ошибк в общую внешнюю структруру store.error
     *
     * @param {object} store вся структура данных
     * @param {string} name  имя подраздела в структуре данных
     * @param {object} error добавляемая ошибка
     */
    error(name, error) {
        const modif = this.store;
        if ('error' in modif[name]) {
            modif[name].error = { ...modif[name].error, ...error };
        } else {
            modif.error = { ...modif.error, ...error };
        }
        return this;
    }

    /**
     * переключение режима ожидания/свободный
     * @param {boolean} enable
     */
    idle(enable) {
        this.store = {
            ...this.store,
            ui: { ...this.store.ui, state: (enable ? 'idle' : 'wait') },
        };
        return this;
    }

    assignTo(name, data) {
        this.store = {
            ...this.store,
            [name]: {
                ...this.store[name],
                ...data,
            },
        };
        return this;
    }
}

const storing = new Storing();

export default (store) => {
    storing.store = { ...store };
    return storing;
};
