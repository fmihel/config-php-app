import './data';
import './actions';
import React from 'react';
import { binds, ut } from 'fmihel-browser-lib';
import redux from 'REDUX';

class Page1 extends React.Component {
    constructor(p) {
        super(p);
        binds(this, 'onSend');
    }

    onSend() {
        redux.actions.Send(ut.random_str(5));
    }

    render() {
        return (
            <div>
                <span>result: {this.props.page1.msg}</span><br/>
                <button type="button" className="btn btn-secondary" onClick={this.onSend}>Send..</button>
            </div>
        );
    }
}

Page1.defaultProps = {

};


const mapStateToProps = (state) => ({
    page1: state.page1,
});

export default redux.connect(mapStateToProps)(Page1);
