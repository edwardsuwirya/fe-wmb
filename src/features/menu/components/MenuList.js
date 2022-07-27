import {Component} from "react";
import {menuService} from "../../../services/menuService";
import {Button, Container, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";

class MenuList extends Component {
    constructor(props) {
        super(props);
        this.menuService = menuService();
    }

    render() {
        const menus = this.menuService.showAll();
        return (
            <Container className="p-3">
                <div className="d-flex justify-content-between">
                    <h3>Menu</h3>
                    <Button size="sm" onClick={this.props.onNavigateToForm}>
                        <FontAwesomeIcon icon={faAdd}/>
                        <span className={"p-2"}>Tambah Menu</span>
                    </Button>
                </div>
                <Table striped>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Harga</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        menus.map((menu, index) => {
                            return <tr key={menu.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{menu.name}</td>
                                <td>{menu.price.toLocaleString()}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default MenuList;
