import {Component} from "react";
import {tableService} from "../../../services/tableService";
import {table} from "../../../model/table";
import {Button, Card, Container, Form} from "react-bootstrap";

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
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeId(e) {
        this.setState({
            id: e.target.value,
        }, this.validate)
    }

    handleChangeNumber(e) {
        this.setState({
            tableNumber: e.target.value,
        }, this.validate)
    }

    handleChangeStatus(e) {
        this.setState({
            status: e.target.value,
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
            <Container className="p-2">
                <Card>
                    <Card.Body>
                        <Card.Title>Tambah Meja</Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>ID Meja</Form.Label>
                                <Form.Control type="text" placeholder="Masukan ID meja"
                                              onChange={this.handleChangeId}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nomor Meja</Form.Label>
                                <Form.Control type="text" placeholder="Masukan nomor meja"
                                              onChange={this.handleChangeNumber}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nomor Meja</Form.Label>
                                <Form.Control type="text" placeholder="Masukan Status"
                                              onChange={this.handleChangeStatus}/>
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

export default TableForm;
