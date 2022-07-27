import {Component} from "react";
import "./Login.css";
import {EMAIL_REGEX} from "../../../shared/constants";
import {userCredential} from "../../../model/userCredential";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isValid: false,
            userNameTouched: false,
            passwordTouched: false,
            errorName: {email: '', password: ''}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(event) {
        const email = event.target.value;
        if (email.match(EMAIL_REGEX)) {
            this.setState({
                username: email,
                errorName: {...this.state.errorName, email: ''},
                userNameTouched: true
            }, this.validate);
        } else {
            this.setState({
                errorName: {...this.state.errorName, email: 'Invalid email format'}
            }, this.validate);
        }
    };

    handlePasswordChange(event) {
        const userPassword = event.target.value;
        if (userPassword.length > 5) {
            this.setState({
                password: userPassword,
                errorName: {...this.state.errorName, password: ''},
                passwordTouched: true
            }, this.validate);
        } else {
            this.setState({
                errorName: {...this.state.errorName, password: '6 min length'}
            }, this.validate);
        }
    };

    handleSubmit(event) {
        const {username, password} = this.state;
        this.props.onLogin(userCredential(username, password));
        event.preventDefault()
    };

    validate() {
        const {errorName, userNameTouched, passwordTouched} = this.state;
        if (errorName.email.length > 0 || errorName.password.length > 0 ||
            !userNameTouched || !passwordTouched) {
            this.setState({
                isValid: false
            })
        } else {
            this.setState({
                isValid: true
            })
        }
    }

    render() {
        const {errorName, isValid} = this.state;
        return (
            <div className="login main d-flex flex-column justify-content-center">
                <Container>
                    <Row>
                        <Col sm={2} lg={8}></Col>
                        <Col sm={1} lg={4}>
                            <Card style={{width: '32rem',backgroundColor:'whitesmoke',borderRadius:'15px'}} className="p-3">
                                <Card.Body>
                                    <Card.Title><h2>Sistem Informasi WMB</h2></Card.Title>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control size="lg" type="email" placeholder="Masukan email"
                                                          onChange={this.handleUsernameChange}/>
                                            <Form.Text className="text-danger">
                                                {errorName.email}
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control size="lg" type="password" placeholder="Masukan Password"
                                                          onChange={this.handlePasswordChange}/>
                                            <Form.Text className="text-danger">
                                                {errorName.password}
                                            </Form.Text>
                                        </Form.Group>
                                        <div className="d-grid">
                                            <Button size="lg" variant="primary" type="submit"
                                                    disabled={!isValid}>Masuk</Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LoginView;
