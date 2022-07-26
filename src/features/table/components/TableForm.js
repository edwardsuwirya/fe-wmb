import {Component} from "react";
import {tableService} from "../../../services/tableService";
import {table} from "../../../model/table";

class TableForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            tableNumber: '',
            status: '',
            isValid: false
        };
        this.tableService = tableService();
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeId(e) {
        this.setState({
            id: e.target.value,
        }, this.validate)
    }

    handleChangeNumber(e) {
        this.setState({
            tableNumber: e.target.value,
        }, this.validate)
    }

    handleChangeStatus(e) {
        this.setState({
            status: e.target.value,
        }, this.validate)
    }

    validate() {
        if (this.state.id && this.state.tableNumber && this.state.status) {
            this.setState({isValid: true})
        } else {
            this.setState({isValid: false})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const {id, tableNumber, status} = this.state;
        this.tableService.addNewTable(table(id, tableNumber, status));
        this.props.onCancelForm();
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="m-group">
                        <label htmlFor="inputId">Id Table</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputId"
                            placeholder="Enter Id"
                            onChange={this.handleChangeId}
                        />
                        <label htmlFor="inputName">Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            placeholder="Enter Number"
                            onChange={this.handleChangeNumber}
                        />
                        <label htmlFor="inputPrice">Status</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputPrice"
                            placeholder="Enter Status"
                            onChange={this.handleChangeStatus}
                        />
                    </div>
                    <br/>
                    <button type="button" className="btn btn-warning" onClick={this.props.onCancelForm}>
                        Cancel
                    </button>
                    <button disabled={!this.state.isValid} type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default TableForm;
