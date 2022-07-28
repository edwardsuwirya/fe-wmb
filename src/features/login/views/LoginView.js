import {Component} from "react";
import "./Login.css";
import {EMAIL_REGEX} from "../../../shared/constants";
import {userCredential} from "../../../model/userCredential";
import AppInput from "../../../shared/components/AppInput";

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isValidUserName: false,
            isValidPassword: false,
            errorName: {email: '', password: ''}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key, value) {
        switch (key) {
            case "username":
                this.setState({
                    [key]: value
                }, this.validateUserName);
                break;
            case "password":
                this.setState({
                    [key]: value
                }, this.validatePassword);
                break;
        }
    }

    handleSubmit(event) {
        const {isValidUserName, isValidPassword} = this.state;
        if (isValidUserName && isValidPassword) {
            const {username, password} = this.state;
            this.props.onLogin(userCredential(username, password));
            event.preventDefault()
        }
    };

    validatePassword() {
        const {password} = this.state;
        if (!(password.length > 5)) {
            this.setState({
                errorName: {...this.state.errorName, password: '6 min length'},
                isValidPassword: false
            });
        } else {
            this.setState({
                errorName: {...this.state.errorName, password: ''},
                isValidPassword: true
            })
        }
    }

    validateUserName() {
        const {username} = this.state;
        if (!username.match(EMAIL_REGEX)) {
            this.setState({
                errorName: {...this.state.errorName, email: 'Invalid email format'},
                isValidUserName: false
            });
        } else {
            this.setState({
                errorName: {...this.state.errorName, email: ''},
                isValidUserName: true
            })
        }
    }

    render() {
        const {errorName, isValidUserName, isValidPassword} = this.state;
        return (
            <div className="login main">
                <form onSubmit={this.handleSubmit}>
                    <div className="d-flex flex-column login container">
                        <div className="d-flex align-items-center login containerCenter">
                            <div className="d-flex justify-content-end login containerEnd">
                                <div className="card w-50 login backgroundColorCard">
                                    <div className="card-body">
                                        <h2 className="login">Login Page</h2>
                                        <br/>
                                        <div>
                                            <div className={`form-group`}>
                                                <AppInput id="username" label="User Name" placeholder='Masukan Email'
                                                          onChange={this.handleChange}/>
                                                <small className="text-danger">{errorName.email}</small>
                                            </div>
                                            <div className={`form-group`}>
                                                <AppInput id="password" type='password' placeholder='Masukan Password'
                                                          label="Password" onChange={this.handleChange}/>
                                                <small className="text-danger">{errorName.password}</small>
                                            </div>
                                            <br></br>
                                            <button
                                                type="submit"
                                                className={`btn btn-primary login`}
                                                disabled={!(isValidUserName && isValidPassword)}
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
