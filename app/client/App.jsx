import 'bootstrap';
import React from 'react';
import { binds } from 'fmihel-browser-lib';
import router from 'fmihel-php-router-client';
import Container from 'COMPONENTS/Container.jsx';
import Row from 'COMPONENTS/Row.jsx';
import Col from 'COMPONENTS/Col.jsx';
import Nav from 'COMPONENTS/Nav.jsx';
import NavMenu from 'COMPONENTS/NavMenu.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink as Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import logout from 'REDUX/logout/action';
import pages from './source/pages';

class App extends React.Component {
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
        const { menu, reduxState } = this.props;
        const { ui } = reduxState;

        return (
            <Router>
                <div id='up' >
                    <Container>
                        <Row>
                            <Col>
                                <Nav caption='Navbar' light={false}>
                                    <NavMenu menu={menu[ui.type]}/>
                                </Nav>

                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id='down' >
                    <Container>
                        <Row>
                            <Col>
                                <Switch>
                                    {menu[ui.type].map((item) => <Route key={item.id} exact={item.exact} path={item.link} component={item.component} />)}
                                </Switch>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </Router>
        );
    }
}


App.defaultProps = {
    menu: {
        proverka: [
            {
                id: 'proverka',
                caption: '..',
                link: '/',
                component: pages.Proverka,
                exact: false,
            },
        ],
        noAutorize: [
            {
                id: 'autorize',
                caption: 'Login',
                link: '/',
                component: pages.Autorize,
                exact: false,
            },
        ],
        autorize: [
            {
                id: 'main',
                caption: 'main',
                link: '/',
                component: pages.Main,
                exact: true,
            },
            {
                id: 'page1',
                caption: 'page1',
                link: '/page1',
                component: pages.Page1,
            },
            {
                id: 'logout',
                caption: 'logout',
                onClick() {
                    logout();
                },
            },
        ],
    },
};


const mapStateToProps = (state) => ({
    reduxState: state,
});


export default connect(mapStateToProps)(App);
