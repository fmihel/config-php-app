import React from 'react';
// import {flex,binds} from 'fmihel-browser-lib';
export default class Col extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        return (

            <div className= {`col ${this.props.addClass}`} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}
Col.defaultProps = {
    addClass: '',
    style: {},
};
