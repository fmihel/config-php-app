import React from 'react';
import NavMenuItem from './NavMenuItem.jsx';


export default class NavMenu extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {this.props.menu.map((item) => <NavMenuItem key={item.id} {...item}/>)}
                </ul>

            </div>
        );
    }
}
NavMenu.defaultProps = {
    menu: [],
};
