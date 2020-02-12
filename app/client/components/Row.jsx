import React from 'react';
// import {flex,binds} from 'fmihel-browser-lib';
export default class Row extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        const { css, style } = this.props;
        return (

            <div className= {css || 'row'} style={style}>
                {this.props.children}
            </div>
        );
    }
}
Row.defaultProps = {
    css: '',
    style: {},
};
