import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {AddButton} from './sizeModel.styles';
import SizeDropdown from '../size-dropdown/sizeDropdown.component';

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';


const SizeModel = ({ modal, setModal, item, addItem }) => {
  const [dropdownValue, setDropdownValue] = useState('select size');
  
  const toggle = () => setModal(!modal);

  const handleClick = (e) => {
    setDropdownValue(e.currentTarget.textContent)
  }

  const newItem = (item) => {
    return {...item, selectedSize: dropdownValue}
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Select your size</ModalHeader>
        <ModalBody>
          Select your size blah blah blah
          <SizeDropdown item={item} handleClick={handleClick} dropdownValue={dropdownValue}/>
        </ModalBody>
        <ModalFooter>
          <AddButton onClick={() => addItem(newItem(item)) && setModal(false)}>Add to cart</AddButton>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: newItem => dispatch(addItem(newItem))
});

export default connect(
  null,
  mapDispatchToProps
)(SizeModel);