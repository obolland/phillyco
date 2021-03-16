import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {AddButton, ModalText} from './sizeModel.styles';
import SizeDropdown from '../size-dropdown/sizeDropdown.component';

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import './sizeModal.styles.scss'


const SizeModel = ({ modal, setModal, item, addItem }) => {
  const [dropdownValue, setDropdownValue] = useState('select size');
  
  const toggle = () => setModal(!modal);

  const handleClick = (e) => {
    setDropdownValue(e.currentTarget.textContent)
  }

  const newItem = (item) => {
    return {...item, selectedSize: dropdownValue.toLowerCase()}
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Select Your Size From The Menu Below</ModalHeader>
        <ModalBody>
          <SizeDropdown item={item} handleClick={handleClick} dropdownValue={dropdownValue}/>
          <ModalText>
            { item.title === 'prints' ?
            <p>
              <ul>
                <li>Small - A5 - £9.99</li>
                <li>Medium - A4 - £15.99</li>
                <li>Large - A3 - £20.99</li>
              </ul>
              All prints are hand drawn and printed on 270gsm, white velvet archival paper for a crisp,
              detailed finish with a minimalist feel.<br/>
              Additional details about the item and sizes can be found by scrolling through the item's photos.
            </p>
            :
            <p>
              <ul>
                <li>Screen Printed with Eco-Friendly Inks</li>
                <li>CO2 Climate Neutral</li>
                <li>Fair Wear Accredited & Peta Approved Vegan</li>
              </ul>
              All garments are made from 100% combed oganic cotton;
              a durable, breathable and sustainable material with a comfortable, relaxed feel.<br/>
              All artwork is original and hand-drawn.<br/>
              Additional details about the item, sizes and fit can be found by scrolling through the item's photos.
            </p>
            }
          </ModalText>
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