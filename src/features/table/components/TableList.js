import {Component} from "react";
import {tableService} from "../../../services/tableService";
import {Badge, Button, Container, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";

class TableList extends Component {
    constructor(props) {
        super(props);
        this.tableService = tableService();
    }

    render() {
        const tables = this.tableService.showAll();
        return (
            <Container className="p-3">
                <div className="d-flex justify-content-between">
                    <h3>Meja</h3>
                    <Button size="sm" onClick={this.props.onNavigateToForm}>
                        <FontAwesomeIcon icon={faAdd}/>
                        <span className={"p-2"}>Tambah Meja</span>
                    </Button>
                </div>
                <Table striped>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nomor Meja</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tables.map((table, index) => {
                            return <tr key={table.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{table.tableNumber}</td>
                                <td>
                                    <Badge
                                        bg={table.status === "A" ? "primary" : "danger"}>{table.status}</Badge>
                                </td>
                            </tr>
                        })
                    }
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default TableList;
