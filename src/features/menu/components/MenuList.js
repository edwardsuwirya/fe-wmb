import {Component} from "react";
import {menuService} from "../../../services/menuService";

class MenuList extends Component {
    constructor(props) {
        super(props);
        this.menuService = menuService();
        this.state = {
            menus: []
        }
    }

    componentDidMount() {
        this.setState({
            menus: this.menuService.showAll()
        })
    }

    render() {
        const {menus} = this.state;
        return (
            <div className="container">
                <button type="button" className="btn btn-primary" onClick={this.props.onNavigateToForm}>Tambah Menu
                </button>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        menus.map((menu, index) => {
                            return <tr key={menu.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{menu.name}</td>
                                <td>{menu.price}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MenuList;
