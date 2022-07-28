import {Component} from "react";
import {menuService} from "../../../services/menuService";
import {menu} from "../../../model/menu";
import AppInput from "../../../shared/components/AppInput";
import AppSubmitButton from "../../../shared/components/AppSubmitButton";
import AppCancelButton from "../../../shared/components/AppCancelButton";

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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
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
                        <AppInput id="id" label="Id Menu" placeholder='Masukan Id' onChange={this.handleChange}/>
                        <AppInput id="name" label="Nama" placeholder='Masukan Nama' onChange={this.handleChange}/>
                        <AppInput id="price" label="Harga" placeholder='Masukan Harga' onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <AppCancelButton label='Cancel' onCancel={this.props.onCancelForm}/>
                    <AppSubmitButton disabled={!this.state.isValid} label="Submit"/>
                </form>
            </div>
        );
    }
}

export default MenuForm;
