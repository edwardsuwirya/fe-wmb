import { Component } from "react";
import FormTable from "./formTable";
import ListTable from "./listTable";

class Table extends Component{
    constructor(props) {
        super(props);
        this.state = {
          // tables: [
          //   {
          //     id: "001",
          //     tableNumber: "001",
          //     status: "Available",
          //   },
          //   {
          //       id: "002",
          //       tableNumber: "002",
          //       status: "Unavailable",
          //     },
          //     {
          //       id: "003",
          //       tableNumber: "003",
          //       status: "Available",
          //     },
          // ],
          addedForm : false
        };
      }
    
      changeAddedForm = () => {
          this.setState({
              addedForm : true
          })
      }
    
      handleSubmit = (data) => {
        this.setState({
            addedForm: false,
        })
        this.props.cbSubmitTable(data)
      }
    
      handleCancel = () => {
          this.setState({
            addedForm: false,
          })
      }
    
      render() {
        return (
          <>
          {this.state.addedForm ? <FormTable submitForm = {this.handleSubmit} cancelForm = {this.handleCancel}/> :
            <ListTable tables={this.props.tables} addedFormCB = {this.changeAddedForm}/>}
          </>
        );
      }
}

export default Table;