import {Component} from "react";
import {menuService} from "../../../services/menuService";
import {menu} from "../../../model/menu";
import {Button, Card, Container, Form} from "react-bootstrap";

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
            <Container className="p-2">
                <Card>
                    <Card.Body>
                        <Card.Title>Tambah Menu</Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>ID Menu</Form.Label>
                                <Form.Control type="text" placeholder="Masukan ID menu"
                                              onChange={this.handleChangeId}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nama Menu</Form.Label>
                                <Form.Control type="text" placeholder="Masukan nama menu"
                                              onChange={this.handleChangeName}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Harga</Form.Label>
                                <Form.Control type="text" placeholder="Masukan harga menu"
                                              onChange={this.handleChangePrice}/>
                            </Form.Group>
                            <div>
                                <Button className={"w-25 m-1"} variant="warning" type="button"
                                        onClick={this.props.onCancelForm}>Batal</Button>
                                <Button className={"w-25 m-1"} type="submit" variant="primary"
                                        disabled={!this.state.isValid}>
                                    Simpan
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>

            </Container>
        );
    }
}

export default MenuForm;
