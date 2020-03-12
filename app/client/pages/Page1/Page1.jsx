import React from 'react';
import { binds, ut } from 'fmihel-browser-lib';
import './data';
import { connect } from 'react-redux';
import actSend from './actions/Send';

class Page1 extends React.Component {
    constructor(p) {
        super(p);
        binds(this, 'onSend');
    }

    onSend() {
        actSend(ut.random_str(5));
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

export default connect(mapStateToProps)(Page1);
