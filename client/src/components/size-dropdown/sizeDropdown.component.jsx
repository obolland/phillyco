import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SizeDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select Size
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Small</DropdownItem>
        <DropdownItem>Medium</DropdownItem>
        <DropdownItem>Large</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SizeDropdown;