import {Component} from "react";
import {tableService} from "../../../services/tableService";
import {table} from "../../../model/table";
import AppInput from "../../../shared/components/AppInput";
import AppCancelButton from "../../../shared/components/AppCancelButton";
import AppSubmitButton from "../../../shared/components/AppSubmitButton";

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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
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
                    <div className="form-group">
                        <AppInput id="id" label="Id Table" placeholder='Masukan Id' onChange={this.handleChange}/>
                        <AppInput id="tableNumber" placeholder='Masukan Nomor' label="Nomor Meja" onChange={this.handleChange}/>
                        <AppInput id="status" placeholder='Masukan Status' label="Status" onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <AppCancelButton label='Cancel' onCancel={this.props.onCancelForm}/>
                    <AppSubmitButton disabled={!this.state.isValid} label="Submit"/>
                </form>
            </div>
        );
    }
}

export default TableForm;
