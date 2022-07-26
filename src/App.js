import React from 'react';
import './App.css'
import HomeView from './features/home/views/HomeView';
import LoginView from './features/login/views/LoginView';
import {loginService} from "./services/loginService";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            logged: false
        }
        this.loginService = loginService();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login(userCredential) {
        if (this.loginService.authenticate(userCredential)) {
            this.setState({
                logged: true
            })
        } else {
            alert("Incorrect email or password")
        }
    }

    logout() {
        this.setState({
            logged: false
        })
    }

    render() {
        return (
            <div>
                {this.state.logged ? <HomeView onLogout={this.logout}/> : <LoginView onLogin={this.login}/>}
            </div>
        );
    }
}

export default App;
