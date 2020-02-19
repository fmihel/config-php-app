import React from 'react';
import DebugItem from './DebugItem.jsx';

export default class DebugList extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        const { list } = this.props;

        const names = Object.keys(list);

        return (
            <div >
                {names.map((name) => <DebugItem key={name} name={name} value={list[name]}/>)}
            </div>
        );
    }
}

DebugList.defaultProps = {
    list: {
        name: 'mean',
    },
};
