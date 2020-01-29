import React from 'react';
import { ut, binds } from 'fmihel-browser-lib';
import {
    NavLink as Link,
} from 'react-router-dom';

export default class NavMenuItem extends React.Component {
    constructor(p) {
        super(p);
        binds(this, 'doClick');
    }

    doClick() {
        if (this.props.onClick) { this.props.onClick({ id: this.props.id, sender: this }); }
    }

    render() {
        const {
            id, caption, addClass, link, active, exact,
            disabled,
        } = this.props;
        return (
            <li
                id={id}
                className={`nav-item ${active}` ? 'active' : ''}
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                onClick = {this.doClick}
            >
                <Link
                    to ={link}
                    exact = {exact}
                    className={ `nav-link ${disabled ? 'disabled ' : ' '}${addClass}` }
                >
                    {caption}

                </Link>
            </li>
        );
    }
}
NavMenuItem.defaultProps = {
    id: ut.random_str(5),
    exact: false,
    caption: '',
    addClass: '',
    link: '#',
    active: false,
    disabled: false,
    onClick: undefined,
};
