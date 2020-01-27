import React from 'react';
import { ut } from 'fmihel-browser-lib';
import {
    NavLink as Link,
} from 'react-router-dom';

export default class NavMenuItem extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        const {
            id, caption, addClass, link, active, exact,
        } = this.props;
        return (
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show" >
                <Link
                    id={id}
                    to ={link}
                    exact = {exact}
                    className={`nav-link ${active ? 'active ' : ''}${addClass}`}
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
    link: '',
    active: false,
};
