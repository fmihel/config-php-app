import 'bootstrap';
import React from 'react';
import { binds } from 'fmihel-browser-lib';
import router from 'fmihel-php-router-client';
import Container from 'components/Container.jsx';
import Row from 'components/Row.jsx';
import Col from 'components/Col.jsx';
import Nav from 'components/Nav.jsx';
import NavMenu from 'components/NavMenu.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink as Link,
} from 'react-router-dom';
import pages from './source/pages';


export class App extends React.Component {
    constructor(p) {
        super(p);
        binds(this, 'onClick');
    }

    onClick() {
        router({
            id: 'send',
            data: { send: 'from ..' },
        }).then((data) => {
            console.info(data);
        });
    }

    render() {
        const { menu } = this.props;
        return (
            <Router>
                <Container>
                    <Row>
                        <Col>
                            <Nav caption='Navbar' light={false}>
                                <NavMenu menu={menu}/>
                            </Nav>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Switch>
                                {menu.map((item) => <Route key={item.id} exact={item.exact} path={item.link} component={item.component} />)}
                            </Switch>

                        </Col>
                    </Row>
                </Container>
            </Router>
        );
    }
}


App.defaultProps = {
    menu: [
        {
            id: 'main', caption: 'main', link: '/', component: pages.Main, exact: true,
        },
        {
            id: 'page1', caption: 'page1', link: '/page1', component: pages.Page1,
        },
    ],
};
