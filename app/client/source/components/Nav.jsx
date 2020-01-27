import React from 'react';

export default class Nav extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        const { light, addClass, caption } = this.props;
        const navClass = `navbar navbar-expand-lg ${light ? 'navbar-light bg-light ' : 'navbar-dark bg-dark'}${addClass}`;
        return (
            <nav className={navClass}>
                <a className="navbar-brand" href="#">{caption}</a>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {this.props.children}
            </nav>
        );
    }
}
Nav.defaultProps = {
    caption: '',
    addClass: '',
    light: true,
};
