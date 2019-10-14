import React, { Component } from "react";
import database from "./database.json";
import {
  Input,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Button
} from "reactstrap";

class App extends Component {
  state = {
    items: [],
    newItemData: {
      27: "",
      110: "",
      112: "",
      114: "",
      116: "",
      121: "",
      123: "",
      125: "",
      127: "",
      129: "",
      131: "",
      133: "",
      135: "",
      $id: ""
    },
    currrentlyClicked: {
      27: "",
      110: "",
      112: "",
      114: "",
      116: "",
      121: "",
      123: "",
      125: "",
      127: "",
      129: "",
      131: "",
      133: "",
      135: "",
      $id: ""
    },
    itemToPush: "",
    currrentlyClickedCaptured: "",
    saveChangesClicked: false,
    newItemModal: false,
    editItemModal: false,
    xToReach: "",
    copiedNukopijuota: ""
  };

  componentWillMount() {
    this.setState({
      items: database
    });
  }

  toggleNewItemModal() {
    this.setState({
      newItemModal: !this.state.newItemModal,
    });
  }

  closeNewItemModal = () => {
    this.setState({
      newItemModal: !this.state.newItemModal,
      newItemData: {
        27: "",
        110: "",
        112: "",
        114: "",
        116: "",
        121: "",
        123: "",
        125: "",
        127: "",
        129: "",
        131: "",
        133: "",
        135: "",
        $id: ""
      }
    });
  }
  toggleEditItemModal() {
    this.setState({
      editItemModal: !this.state.editItemModal
    });
  }

  revokeChanges = () => {
    this.setState({
      editItemModal: !this.state.editItemModal,
      saveChangesClicked: false
    });
    let cI = this.state.items.indexOf(this.state.currrentlyClicked);
    this.state.items[cI] = this.state.copiedNukopijuota;
  };

  addItem() {
    var { items } = this.state;

    this.setState({
      items: [this.state.newItemData, ...items],
      newItemModal: false,
      newItemData: []
    });
  }
  updateItem(x) {
    if (this.state.saveChangesClicked) {
      saveChangesClicked: false;
    } else
      this.setState(
        {
          editItemModal: !this.state.editItemModal,
          saveChangesClicked: true
        },
        () => {
            this.setState({
              saveChangesClicked: false
            });

        }
      );
  }

  editItem(x) {
    // this.setState({
    //   saveChangesClicked: false
    // });
    var bestCopyEver = src => Object.assign({}, src);

    var nukopijuota = bestCopyEver(x);
    this.setState({
      copiedNukopijuota: nukopijuota
    });

    if (this.state.saveChangesClicked) {
      alert("Changes clicked");
      // Turiu pakeisti itemo value i nauja currentlyCLicked ?
      this.setState({
        editItemModal: !this.state.editItemModal,
        currrentlyClicked: nukopijuota,
        saveChangesClicked: false
      });
    } else
      this.setState({
        editItemModal: !this.state.editItemModal,
        currrentlyClicked: x
      });

    console.log(nukopijuota);
  }

  deleteItem(z) {
    // var valuesToRemove = _id
    // var filteredItems = this.state.items.filter(item => !valuesToRemove.includes(item))
    // console.table(y)

    let itemsCopy = this.state.items;
    itemsCopy.splice(z, 0);
    let filteredItems = this.state.items.shift();

    console.warn(z);

    this.setState({
      items: itemsCopy
    });
  }

  render() {
    let items = this.state.items.map((item, _id) => {
      return (
        <tr key={_id}>
          <td>{item["$id"]}</td>
          <td>{item[27]}</td>
          <td>{item[110]}</td>
          <td>{item[112]}</td>
          <td>{item[114]}</td>
          <td>{item[116]}</td>
          <td>{item[121]}</td>
          <td>{item[123]}</td>
          <td>{item[125]}</td>
          <td>{item[127]}</td>
          <td>{item[129]}</td>
          <td>{item[131]}</td>
          <td>{item[133]}</td>
          <td>{item[135]}</td>
          <td>
            <Button
              color="success"
              size="sm"
              className="m-2"
              onClick={this.editItem.bind(this, item)}
            >
              Edit
            </Button>
            <Button
              color="danger"
              size="sm"
              className="m-2"
              onClick={this.deleteItem.bind(this, item, _id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
    return (
      <div className="App">
        <h1 className="text-center">mano.bank App</h1>

        <Button
          className="my-3"
          color="info"
          onClick={this.toggleNewItemModal.bind(this)}
        >
          Add an Item
        </Button>

        <Modal
          isOpen={this.state.newItemModal}
          toggle={this.toggleNewItemModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleNewItemModal.bind(this)}>
            Add a new item
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="ID">ID</Label>
              <Input
                id="ID"
                value={this.state.newItemData["$id"]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData["$id"] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="identifier_name">Identifier Name</Label>
              <Input
                id="identifier_name"
                value={this.state.newItemData[27]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData[27] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="identifier_type">Identifier Type</Label>
              <Input
                id="identifier_type"
                value={this.state.newItemData[110]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData[110] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="value1">Value1</Label>
              <Input
                id="value1"
                value={this.state.newItemData[112]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData[112] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="country">Country</Label>
              <Input
                id="country"
                value={this.state.newItemData[114]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData[114] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="country_iso">ISO Code</Label>
              <Input
                id="country_iso"
                value={this.state.newItemData[116]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData[116] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tax_id_no">Tax ID #</Label>
              <Input
                id="tax_id_no"
                value={this.state.newItemData[121]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData[121] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tax_code">Tax Code</Label>
              <Input
                id="tax_code"
                value={this.state.newItemData[123]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData[123] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="value2">Value2</Label>
              <Input
                id="value2"
                value={this.state.newItemData[125]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData[125] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="up_to">Up to:</Label>
              <Input
                id="up_to"
                value={this.state.newItemData[127]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData[127] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="numbers">Numbers</Label>
              <Input
                id="numbers"
                value={this.state.newItemData[129]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData[129] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="entities">Entities</Label>
              <Input
                id="entities"
                value={this.state.newItemData[131]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData[131] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="oecd">OECD</Label>
              <Input
                id="oecd"
                value={this.state.newItemData[133]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData[133] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="identifier">Identifier</Label>
              <Input
                id="identifier"
                value={this.state.newItemData[135]}
                onChange={e => {
                  let { newItemData } = this.state;

                  newItemData[135] = e.target.value;

                  this.setState({ newItemData });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addItem.bind(this)}>
              Add Item
            </Button>
            <Button color="secondary" onClick={this.closeNewItemModal.bind(this)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.editItemModal}
          toggle={this.toggleEditItemModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleEditItemModal.bind(this)}>
          Edit an item (Changes made in real time)
          </ModalHeader>
          <ModalBody >
            {/* --------------------EDIT VALUES------------------------------------- */}
            <FormGroup>
              <Label for="ID">ID</Label>
              <Input
                id="ID"
                value={this.state.currrentlyClicked["$id"]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked["$id"] = e.target.value;

                  this.setState({ currrentlyClicked });

                  console.table(this.state.currrentlyClicked);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="identifier_name">Identifier Name</Label>
              <Input
                id="identifier_name"
                value={this.state.currrentlyClicked[27]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked[27] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="identifier_type">Identifier Type</Label>
              <Input
                id="identifier_type"
                value={this.state.currrentlyClicked[110]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked[110] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="value1">Value1</Label>
              <Input
                id="value1"
                value={this.state.currrentlyClicked[112]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked[112] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="country">Country</Label>
              <Input
                id="country"
                value={this.state.currrentlyClicked[114]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked[114] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="country_iso">ISO Code</Label>
              <Input
                id="country_iso"
                value={this.state.currrentlyClicked[116]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked[116] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tax_id_no">Tax ID #</Label>
              <Input
                id="tax_id_no"
                value={this.state.currrentlyClicked[121]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked[121] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tax_code">Tax Code</Label>
              <Input
                id="tax_code"
                value={this.state.currrentlyClicked[123]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked[123] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="value2">Value2</Label>
              <Input
                id="value2"
                value={this.state.currrentlyClicked[125]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked[125] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="up_to">Up to:</Label>
              <Input
                id="up_to"
                value={this.state.currrentlyClicked[127]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked[127] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="numbers">Numbers</Label>
              <Input
                id="numbers"
                value={this.state.currrentlyClicked[129]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked[129] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="entities">Entities</Label>
              <Input
                id="entities"
                value={this.state.currrentlyClicked[131]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked[131] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="oecd">OECD</Label>
              <Input
                id="oecd"
                value={this.state.currrentlyClicked[133]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked[133] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="identifier">Identifier</Label>
              <Input
                id="identifier"
                value={this.state.currrentlyClicked[135]}
                onChange={e => {
                  let { currrentlyClicked } = this.state;

                  currrentlyClicked[135] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateItem.bind(this)}>
              Save Changes
            </Button>
            <Button color="secondary" onClick={this.revokeChanges}>
              Undo Changes
            </Button>
          </ModalFooter>
        </Modal>

        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Identifier name</th>
              <th>Identifier type</th>
              <th>Value1</th>
              <th>Country</th>
              <th>ISO Code</th>
              <th>Tax ID #</th>
              <th>Tax code</th>
              <th>Value2</th>
              <th>Up to:</th>
              <th>Numbers</th>
              <th>Entities</th>
              <th>OECD</th>
              <th>Identifier</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </Table>
      </div>
    );
  }
}

export default App;
