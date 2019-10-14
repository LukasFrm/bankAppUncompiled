import React, { Component } from 'react'
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

class EditModal extends Component {
  render() {
    var { editItemModal, toggleEditItemModal, currrentlyClicked, currrentlyClickedCaptured,  } = this.props
    return (
<Modal
          isOpen={this.props.editItemModal}
          toggle={this.props.toggleEditItemModal}
        >
          <ModalHeader toggle={this.props.toggleEditItemModal}>
            Edit an item
          </ModalHeader>
          <ModalBody>
            {/* --------------------EDIT VALUES------------------------------------- */}
            <FormGroup>
              <Label for="ID">ID</Label>
              <Input
                id="ID"
                value={this.props.currrentlyClicked["$id"]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked["$id"] = e.target.value;

                  this.setState({ currrentlyClicked });
                  console.table(currrentlyClickedCaptured);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="identifier_name">Identifier Name</Label>
              <Input
                id="identifier_name"
                value={this.props.currrentlyClicked[27]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked[27] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="identifier_type">Identifier Type</Label>
              <Input
                id="identifier_type"
                value={this.props.currrentlyClicked[110]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked[110] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="value1">Value1</Label>
              <Input
                id="value1"
                value={this.props.currrentlyClicked[112]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked[112] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="country">Country</Label>
              <Input
                id="country"
                value={this.props.currrentlyClicked[114]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked[114] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="country_iso">Country ISO Code</Label>
              <Input
                id="country_iso"
                value={this.props.currrentlyClicked[116]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked[116] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tax_id_no">Tax ID #</Label>
              <Input
                id="tax_id_no"
                value={this.props.currrentlyClicked[121]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked[121] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="tax_code">Tax Code</Label>
              <Input
                id="tax_code"
                value={this.props.currrentlyClicked[123]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked[123] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="value2">Value2</Label>
              <Input
                id="value2"
                value={this.props.currrentlyClicked[125]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked[125] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="up_to">Up to:</Label>
              <Input
                id="up_to"
                value={this.props.currrentlyClicked[127]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked[127] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="numbers">Numbers</Label>
              <Input
                id="numbers"
                value={this.props.currrentlyClicked[129]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked[129] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="entities">Entities</Label>
              <Input
                id="entities"
                value={this.props.currrentlyClicked[131]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked[131] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="oecd">OECD</Label>
              <Input
                id="oecd"
                value={this.props.currrentlyClicked[133]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked[133] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="identifier">Identifier</Label>
              <Input
                id="identifier"
                value={this.props.currrentlyClicked[135]}
                onChange={e => {
                  let { currrentlyClicked } = this.props;

                  currrentlyClicked[135] = e.target.value;

                  this.setState({ currrentlyClicked });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={this.updateItem}
            >
              Save Changes
            </Button>
            <Button color="secondary" onClick={this.revokeChanges}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

    )
  }
}

export default EditModal
