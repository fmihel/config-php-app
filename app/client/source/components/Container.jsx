import React from 'react';
// import {flex,binds} from 'fmihel-browser-lib';
export default class Container extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        return (
            <div className= {`container-fluid ${this.props.addClass}`} style={this.props.style}>
                {this.props.children}

            </div>
        );
    }
}
Container.defaultProps = {
    addClass: '',
    style: {},
};
