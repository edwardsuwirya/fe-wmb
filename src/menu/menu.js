import { Component } from "react";
import FormMenu from "./formMenu";
import ListMenu from "./listMenu";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // menus: [
      //   {
      //     id: "001",
      //     name: "Ayam Geprek",
      //     price: "Rp.25000,00",
      //   },
      //   {
      //     id: "002",
      //     name: "Ayam Bakar",
      //     price: "Rp.30000,00",
      //   },
      //   {
      //     id: "003",
      //     name: "Ayam Goreng",
      //     price: "Rp.20000,00",
      //   },
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
    this.props.cbSubmitMenu(data)
  }

  handleCancel = () => {
      this.setState({
        addedForm: false,
      })
  }

  render() {
    return (
      <>
      {this.state.addedForm ? <FormMenu submitForm = {this.handleSubmit} cancelForm = {this.handleCancel}/> :
        <ListMenu menus={this.props.menus} addedFormCB = {this.changeAddedForm}/>}
      </>
    );
  }
}

export default Menu;
