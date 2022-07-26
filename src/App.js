import React from 'react';
import './App.css'
import Home from './home/home';
import LoginScreen from './login/LoginScreen';

class App extends React.Component{
constructor(props){
  
  super(props)
  this.state = {
   logged : false
  }
}

login = (params) => {
  if(params.username === "admin@gmail.com" && params.password === "12345678"){
  this.setState({
    logged: true
  })
}else{
  alert("Incorrect email or password")
}
}

logout = () => {
  this.setState({
    logged : false
  })
}


render(){

  return(
    <div>
      {this.state.logged ? <Home  callback={this.logout}/> : <LoginScreen callback={this.login}/>}
    </div>
  );
}

}

export default App;
