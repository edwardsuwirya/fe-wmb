import {Component} from "react";
import "./Login.css";
import {EMAIL_REGEX} from "../../../shared/constants";
import {userCredential} from "../../../model/userCredential";

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
            <div className="login main">
                <form onSubmit={this.handleSubmit}>
                    <div className="d-flex flex-column login container">
                        <div className="d-flex align-items-center login containerCenter">
                            <div className="d-flex justify-content-end login containerEnd">
                                <div className="card w-50 login backgroundColorCard">
                                    <div className="card-body">
                                        <h2 className="login">
                                            <i className="fas fa-unlock-alt"></i> Login Page
                                        </h2>
                                        <br/>
                                        <div>
                                            <div className={`form-group`}>
                                                <label htmlFor="inputUserName">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="inputUserName"
                                                    placeholder="Enter email"
                                                    onChange={this.handleUsernameChange}
                                                />
                                                <small className="text-danger">{errorName.email}</small>
                                            </div>
                                            <label htmlFor="inputUserPassword">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="inputUserPassword"
                                                placeholder="Enter password"
                                                onChange={this.handlePasswordChange}
                                            />
                                            <small className="text-danger">{errorName.password}</small>
                                        </div>
                                        <br></br>
                                        <div>
                                            <button
                                                type="submit"
                                                className={`btn btn-primary login inputButtonawesome-button-sm`}
                                                disabled={!isValid}
                                            >
                                                <i className="fas fa-sign-in"></i> Login
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginView;
