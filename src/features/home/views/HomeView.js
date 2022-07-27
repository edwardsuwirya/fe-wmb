import {Component} from "react";
import MenuView from "../../menu/views/MenuView";
import TableView from "../../table/views/TableView";
import Dashboard from "../components/dashboard/Dashboard";
import {APP_TITLE, DASHBOARD_PAGE, MENU_PAGE, TABLE_PAGE} from "../../../shared/constants";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-regular-svg-icons";
import {faUtensils} from "@fortawesome/free-solid-svg-icons/faUtensils";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";

class HomeView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            page: TABLE_PAGE,
        }
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation(newPage) {
        this.setState({
            page: newPage
        })
    }

    render() {
        let showMenu;
        const {page} = this.state;
        if (page === DASHBOARD_PAGE) {
            showMenu = <Dashboard/>
        } else if (page === MENU_PAGE) {
            showMenu = <MenuView/>
        } else if (page === TABLE_PAGE) {
            showMenu = <TableView/>
        }
        return (
            <div className="vh-100 d-flex flex-column" style={{backgroundColor: '#f5f5f5'}}>
                <Navbar expand="lg" style={{backgroundColor:'#c8c8c8'}}>
                    <Container>
                        <Navbar.Brand href="#home"
                                      onClick={() => this.handleNavigation(DASHBOARD_PAGE)}>
                            <FontAwesomeIcon icon={faUtensils} className="text-secondary"></FontAwesomeIcon>
                            <span className={"p-2"}>{APP_TITLE}</span>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#menu" onClick={() => this.handleNavigation(MENU_PAGE)}>Menu</Nav.Link>
                                <Nav.Link href="#table"
                                          onClick={() => this.handleNavigation(TABLE_PAGE)}>Meja</Nav.Link>
                            </Nav>
                            <Button variant="light" onClick={this.props.onLogout}>
                                <FontAwesomeIcon icon={faLock}/>
                                <span className="ps-2">Keluar</span>
                            </Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="d-flex flex-column justify-content-between h-100">
                    <div>
                        {showMenu}
                    </div>
                    <div className="d-flex justify-content-center p-2">
                        <small><FontAwesomeIcon icon={faCopyright}/> 2022 - EnigmaCamp</small>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeView;
