import {Storing} from 'fmihel-redux-wrapper';

export default class MyStoring extends Storing{
    /**
     * переключение режима ожидания/свободный
     * @param {boolean} enable
     */
    idle(enable) {
       return this.extend({
            ui: { state: (enable ? 'idle' : 'wait') }
        });
       
    }

}
