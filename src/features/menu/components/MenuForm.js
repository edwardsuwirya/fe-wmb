import {Component} from "react";
import {menuService} from "../../../services/menuService";
import {menu} from "../../../model/menu";

class MenuForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            isValid: false
        };
        this.menuService = menuService();
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeId(e) {
        this.setState({
            id: e.target.value
        }, this.validate)
    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value,
        }, this.validate)
    }

    handleChangePrice(e) {
        this.setState({
            price: e.target.value,
        }, this.validate)
    }

    handleSubmit(e) {
        e.preventDefault();
        const {id, name, price} = this.state;
        this.menuService.addNewMenu(menu(id, name, price));
        this.props.onCancelForm();
    }

    validate() {
        if (this.state.id && this.state.name && this.state.price) {
            this.setState({isValid: true})
        } else {
            this.setState({isValid: false})
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

export default MenuForm;
