import { Component } from "react";

class FormMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        name: '',
        price: '',
        isValid: true
    };
  }

  handleChangeId = (e) => {
    this.setState({
        id: e.target.value,
        isValid: this.validate()
    })
  }

  handleChangeName = (e) => {
    this.setState({
        name: e.target.value,
        isValid: this.validate()
    })
  }

  handleChangePrice = (e) => {
    this.setState({
        price: e.target.value,
        isValid: this.validate()
    })
  }

  handleSubmit = (e) => {
      this.props.submitForm(this.state)
      e.preventDefault()
  }

  handleCancel = () => {
      this.props.cancelForm()
  }

  validate = () => {
    if(this.state.id && this.state.name && this.state.price){
      return false
    }else{
      return true
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputId">Id Menu</label>
            <input
              type="text"
              className="form-control"
              id="inputId"
              placeholder="Enter Id"
              onChange={this.handleChangeId}
            />
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Enter Name"
              onChange={this.handleChangeName}
            />
            <label htmlFor="inputPrice">Price</label>
            <input
              type="text"
              className="form-control"
              id="inputPrice"
              placeholder="Enter Price"
              onChange={this.handleChangePrice}
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

export default FormMenu;
