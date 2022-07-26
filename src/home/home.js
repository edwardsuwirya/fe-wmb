import { Component } from "react";
import Menu from "../menu/menu";
import Table from "../table/table";
import Dashboard from "./dashboard";

class Home extends Component {

    constructor(props){
        super(props)
        this.state={
            navbar : '',
            menus: [
              {
                id: "001",
                name: "Ayam Geprek",
                price: "Rp.25000,00",
              },
              {
                id: "002",
                name: "Ayam Bakar",
                price: "Rp.30000,00",
              },
              {
                id: "003",
                name: "Ayam Goreng",
                price: "Rp.20000,00",
              },
            ],
            tables: [
              {
                id: "001",
                tableNumber: "001",
                status: "Available",
              },
              {
                  id: "002",
                  tableNumber: "002",
                  status: "Unavailable",
                },
                {
                  id: "003",
                  tableNumber: "003",
                  status: "Available",
                },
            ],
        }
    }

  handleSubmitMenu = (data) => {
    this.setState({
        menus : [...this.state.menus, data]
    })
  }

  handleSubmitTable = (data) => {
    this.setState({
        tables : [...this.state.tables, data]
    })
  }
    

    handleNavbar = (nav) =>{
        this.setState({
            navbar : nav
        })
    }

    logout = () =>{
      this.props.callback()
  }

  render() {
    let showMenu = '';
    if(this.state.navbar === ''){
        showMenu = <Dashboard callback={this.props.callback}/>
    }else if(this.state.navbar === 'menus'){
        showMenu = <Menu menus={this.state.menus} cbSubmitMenu={this.handleSubmitMenu}/>
    }else if(this.state.navbar === 'tables'){
        showMenu = <Table tables={this.state.tables} cbSubmitTable={this.handleSubmitTable}/>
    }
    return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Bakari</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" onClick={() => this.handleNavbar('')}>Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => this.handleNavbar('menus')}>Menus</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => this.handleNavbar('tables')}>Tables</a>
                  </li>
                  <li className="nav-item">
                    <button  type="button" className="btn btn-danger" onClick={this.logout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {showMenu}
      </>
    );
  }
}

export default Home;
