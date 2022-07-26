import { Component } from "react";
import "./Login.css";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isValid : true,
      usenameTouched : false,
      passwordTouched : false,
      errorName : {email : '', password : ''}
    };
  }

  handleUsernameChange = (event) => {
    if(event.target.value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)){
      this.setState({
        username: event.target.value,
        errorName: {...this.state.errorName, email : ''},
        usenameTouched : true
      });
    }else{
      this.setState({
        errorName: {...this.state.errorName, email : 'Invalid email format'}
      });
    }
    this.validate()
  };

  handlePasswordChange = (event) => {
    if(event.target.value.length > 5){
    this.setState({
      password: event.target.value,
      errorName: {...this.state.errorName, password : ''},
      passwordTouched: true
    });
  }else{
    this.setState({
      errorName: {...this.state.errorName, password : '6 min length'}
    });
  }
  this.validate()
  };

  handleSubmit = (event) => {
    this.props.callback(this.state);
    event.preventDefault()
  };

  validate = () => {
    if(this.state.errorName.email.length > 0 || this.state.errorName.password.length > 0 ||
      !this.state.usenameTouched || !this.state.passwordTouched){
      this.setState({
        isValid : true
      })
    }else{
      this.setState({
        isValid: false
      })
    }
  }

  render() {
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
                    <br />
                    <div>
                      <div className={`form-group`}>
                        <label htmlFor="exampleInputusername1">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputusername1"
                          aria-describedby="usernameHelp"
                          placeholder="Enter email"
                          onChange={this.handleUsernameChange}
                        />
                        <small className="text-danger">{this.state.errorName.email}</small>
                      </div>
                      <label htmlFor="exampleInputusername1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        aria-describedby="usernameHelp"
                        placeholder="Enter password"
                        onChange={this.handlePasswordChange}
                      />
                      <small className="text-danger">{this.state.errorName.password}</small>
                    </div>
                    <br></br>
                    <div>
                      <button
                        type="submit"
                        className={`btn btn-primary login inputButtonawesome-button-sm`}
                        disabled={this.state.isValid}
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

export default LoginScreen;
