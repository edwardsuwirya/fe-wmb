import { Component } from "react";

class FormTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        tableNumber: '',
        status: '',
        isValid : true
    };
  }

  handleChangeId = (e) => {
    this.setState({
        id: e.target.value,
        isValid: this.validate()
    })
  }

  handleChangeNumber = (e) => {
    this.setState({
        tableNumber: e.target.value,
        isValid: this.validate()
    })
  }

  handleChangeStatus = (e) => {
    this.setState({
        status: e.target.value,
        isValid: this.validate()
    })
  }

  validate = () => {
    if(this.state.id && this.state.tableNumber && this.state.status){
      return true
    }else{
      return false
    }
  }

  handleSubmit = (e) => {
      this.props.submitForm(this.state)
      e.preventDefault()
  }

  handleCancel = () => {
      this.props.cancelForm()
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
          <button type="button" className="btn btn-warning" onClick={this.handleCancel}>
            Cancel
          </button>
          <button disabled={this.state.isValid} type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormTable;
