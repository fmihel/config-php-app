import React from 'react';
import { binds } from 'fmihel-browser-lib';
import { connect } from 'react-redux';
import doAutorize from 'REDUX/autorize/action';
import Container from 'COMPONENTS/Container.jsx';
import Row from 'COMPONENTS/Row.jsx';
import Col from 'COMPONENTS/Col.jsx';

class Autorize extends React.Component {
    constructor(p) {
        super(p);
        binds(this, 'login', 'onChange');

        this.state = {
            login: '',
            pass: '',
        };
    }

    login() {
        doAutorize({ ...this.props.autorize, login: this.state.login, pass: this.state.pass });
    }

    onChange(e) {
        this.setState({ [e.target.id]: e.target.value.trim() });
    }

    componentDidMount() {
    }

    render() {
        const { autorize } = this.props;
        const alert = autorize.msg ? <div className="alert alert-danger" role="alert" style={{ }}> {autorize.msg} </div> : '';

        return (
            <Container>
                <Row>
                    <Col>
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Autorize</h5>
                                {alert}
                                <div className="input-group mb-3">
                                    <input id='login' placeholder="login" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.onChange}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input id='pass' placeholder="password" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.onChange}/>
                                </div>

                                <button type="button" className="btn btn-primary" onClick={this.login}>Sign in</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
Autorize.defaultProps = {
// default
};

const mapStateToProps = (state) => ({
    autorize: state.autorize,
});


// wrap App in connect and pass in mapStateToProps
export default connect(mapStateToProps)(Autorize);
