import { Component } from "react";

class ListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    return (
      <div className="container">
      <button  type="button" className="btn btn-primary" onClick={this.props.addedFormCB}>Tambah Table</button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Table Number</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {
                this.props.tables.map((table, index) => {
                    return  <tr key={table.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{table.tableNumber}</td>
                    <td className={table.status === "Available" ? "text-primary" : "text-warning"}>{table.status}</td>
                  </tr>
                })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListTable;