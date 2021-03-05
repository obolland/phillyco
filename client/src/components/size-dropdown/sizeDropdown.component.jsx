import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SizeDropdown = ({ item }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('select size');

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const handleClick = (e) => {
    setDropdownValue(e.currentTarget.textContent)
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {dropdownValue}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          className={`${item.size.small === 0 ? 'disabled' : null }`}
          onClick={handleClick}>Small</DropdownItem>
        <DropdownItem 
          className={`${item.size.medium === 0 ? 'disabled' : null }`}
          onClick={handleClick}>Medium</DropdownItem>
        <DropdownItem
          className={`${item.size.small === 0 ? 'disabled' : null }`}
          onClick={handleClick}>Large</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SizeDropdown;