import React from 'react';
// import {flex,binds} from 'fmihel-browser-lib';
export default class Row extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        return (

            <div className= {`row ${this.props.addClass}`} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}
Row.defaultProps = {
    addClass: '',
    style: {},
};
