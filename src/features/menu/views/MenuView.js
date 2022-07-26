import {Component} from "react";
import MenuForm from "../components/MenuForm";
import MenuList from "../components/MenuList";

class MenuView extends Component {
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
                {this.state.addedForm ? <MenuForm onCancelForm={this.handleCancel}/> :
                    <MenuList onNavigateToForm={this.navigateToForm}/>}
            </>
        );
    }
}

export default MenuView;
