import React, { Fragment } from 'react';
import { flex, JX, DOM } from 'fmihel-browser-lib';
import { connect } from 'react-redux';
import actDebug from 'REDUX/Debug/action';
// import React from 'react';
// import { flex, binds } from 'fmihel-browser-lib'
class DebugItem extends React.Component {
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

class DebugList extends React.Component {
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

class DebugInfo extends React.Component {
    constructor(p) {
        super(p);
        this.currentPos = { x: 0, y: 0 };
        this.state = {
            x: 0,
            y: 0,
        };

        $(window).resize(() => {
            const screen = JX.screen();
            actDebug({ screen: `w: ${screen.w}, h: ${screen.h}` });
            let col = 'xs';
            if (screen.w >= 540) col = 'SM';
            if (screen.w >= 720) col = 'MD';
            if (screen.w >= 960) col = 'LG';
            if (screen.w >= 1140) col = 'XL';

            actDebug({ col });
            this.doScreenResize();
        });
    }

    componentDidMount() {
        this.updatePos();
    }

    doScreenResize() {
        this.updatePos();
    }

    updatePos() {
        if (!this.debugInfo) {
            this.debugInfo = DOM('#debugInfo');
        }

        const current = JX.pos(this.debugInfo);
        const screen = JX.screen();
        const newPos = {
            x: screen.w - current.w,
            y: screen.h - current.h,
        };

        if ((this.currentPos.x !== newPos.x) || (this.currentPos.y !== newPos.y)) {
            this.currentPos = newPos;
            this.setState(newPos);
        }
    }

    render() {
        // eslint-disable-next-line no-restricted-syntax
        const { list } = this.props.debug;
        return (
            <div
                id="debugInfo"
                style={{
                    position: 'absolute',
                    width: '200px',
                    height: '250px',
                    border: '1px solid red',
                    left: `${this.state.x}px`,
                    top: `${this.state.y}px`,
                    fontSize: '0.8em',
                    overflow: 'auto',
                }}
            >
                <DebugList list={list}/>
            </div>
        );
    }
}

DebugInfo.defaultProps = {

};


const mapStateToProps = (state) => ({
    debug: state.debug,
});

export default connect(mapStateToProps)(DebugInfo);
