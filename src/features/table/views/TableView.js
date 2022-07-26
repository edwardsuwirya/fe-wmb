import {Component} from "react";
import TableForm from "../components/TableForm";
import TableList from "../components/TableList";

class TableView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addedForm: false
        };
    }

    navigateToForm = () => {
        this.setState({
            addedForm: true
        })
    }

    handleCancel = () => {
        this.setState({
            addedForm: false,
        })
    }

    render() {
        return (
            <>
                {this.state.addedForm ? <TableForm onCancelForm={this.handleCancel}/> :
                    <TableList onNavigateToForm={this.navigateToForm}/>}
            </>
        );
    }
}

export default TableView;
