import {Component} from "react";
import {Button, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import {CommonContainer} from "../../../shared/components/containers/CommonContainer";
import {faEraser} from "@fortawesome/free-solid-svg-icons/faEraser";

class MenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: []
        }
        this.service = this.props.service;
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.setState({
            menus: this.service.showAll()
        })
    }

    handleDelete(id) {
        const result = window.confirm('Are you sure want to delete ?');
        if (result) {
            this.service.deleteMenu(id);
            this.setState({
                menus: this.service.showAll()
            })
        }
    }

    render() {
        return (
            <CommonContainer title='Menu'>
                <>
                    <Button size="sm" style={{textDecoration: "none"}} variant={"link"}
                            onClick={this.props.onNavigateToForm}>
                        <FontAwesomeIcon icon={faAdd}/>
                        <span className="p-2">Tambah Menu</span>
                    </Button>
                </>
                <>
                    <Table striped>
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Harga</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.menus.map((menu, index) => {
                                return <tr key={menu.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{menu.name}</td>
                                    <td>{menu.price.toLocaleString()}</td>
                                    <td style={{textAlign: "center"}}>
                                        <Button size="sm"
                                                variant="danger"
                                                onClick={() => this.handleDelete(menu.id)}><FontAwesomeIcon
                                            icon={faEraser}/><span className="p-2">Delete</span> </Button>
                                    </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </Table>
                </>
            </CommonContainer>
        )
    }
}

export default MenuList;
