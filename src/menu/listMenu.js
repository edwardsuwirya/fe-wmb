import { Component } from "react";

class ListMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    return (
      <div className="container">
      <button  type="button" className="btn btn-primary" onClick={this.props.addedFormCB}>Tambah Menu</button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {
                this.props.menus.map((menu, index) => {
                    return  <tr key={menu.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{menu.name}</td>
                    <td>{menu.price}</td>
                  </tr>
                })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListMenu;