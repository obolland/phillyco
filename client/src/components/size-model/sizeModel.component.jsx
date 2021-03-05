import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {AddButton} from './sizeModel.styles';
import SizeDropdown from '../size-dropdown/sizeDropdown.component';

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';


const SizeModel = ({ modal, setModal, item, addItem }) => {
  
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Select your size</ModalHeader>
        <ModalBody>
          Select your size blah blah blah
          <SizeDropdown item={item}/>
        </ModalBody>
        <ModalFooter>
          <AddButton onClick={() => addItem(item) && setModal(false)}>Add to cart</AddButton>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(SizeModel);