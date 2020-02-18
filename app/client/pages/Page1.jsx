import React from 'react';
import { flex, binds } from 'fmihel-browser-lib';
import router from 'fmihel-php-router-client';

export default class Page1 extends React.Component {
    constructor(p) {
        super(p);
        binds(this, 'onSend');
    }

    onSend() {
        router({
            id: 'send',
            data: 'test data from send',
        })
            .then((ok) => console.info('ok', ok))
            .catch((e) => console.error(e));
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-secondary" onClick={this.onSend}>Send..</button>
            </div>
        );
    }
}
Page1.defaultProps = {

};
