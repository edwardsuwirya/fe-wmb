import {Component} from "react";
import {tableService} from "../../../services/tableService";

class TableList extends Component {
    constructor(props) {
        super(props);
        this.tableService = tableService();
    }

    render() {
        const tables = this.tableService.showAll();
        return (
            <div className="container">
                <button type="button" className="btn btn-primary" onClick={this.props.onNavigateToForm}>Tambah Table
                </button>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Table Number</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tables.map((table, index) => {
                            return <tr key={table.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{table.tableNumber}</td>
                                <td className={table.status === "Available" ? "text-primary" : "text-warning"}>{table.status}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableList;
