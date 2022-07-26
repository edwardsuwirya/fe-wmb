import {Component} from "react";
import MenuView from "../../menu/views/MenuView";
import TableView from "../../table/views/TableView";
import Dashboard from "../components/dashboard/Dashboard";
import {APP_TITLE, DASHBOARD_PAGE, MENU_PAGE, TABLE_PAGE} from "../../../shared/constants";

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
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" onClick={() => this.handleNavigation(DASHBOARD_PAGE)}>{APP_TITLE}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page"
                                       onClick={() => this.handleNavigation(DASHBOARD_PAGE)}>HomeView</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => this.handleNavigation(MENU_PAGE)}>Menus</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => this.handleNavigation(TABLE_PAGE)}>Tables</a>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-danger"
                                            onClick={this.props.onLogout}>Logout
                                    </button>
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

export default HomeView;
