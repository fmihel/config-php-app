import React from 'react';
// import {flex,binds} from 'fmihel-browser-lib';
export default class Col extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        const { css, style } = this.props;
        return (
            <div className= {css || 'col'} style={style}>
                {this.props.children}
            </div>
        );
    }
}
Col.defaultProps = {
    css: '',
    style: {},
};
