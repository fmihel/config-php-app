import React from 'react';
import { flex } from 'fmihel-browser-lib';

export default class DebugItem extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        return (
            <div style={{ ...flex('horiz') }}>
                <div style={{ ...flex(), minWidth: '50px' }}>{this.props.name}</div>
                <div style={{ ...flex() }}>{this.props.value}</div>
            </div>
        );
    }
}
DebugItem.defaultProps = {
    name: 'name',
    value: 'value',
};
