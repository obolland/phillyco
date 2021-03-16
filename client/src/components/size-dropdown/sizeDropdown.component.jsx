import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SizeDropdown = ({ item, dropdownValue, handleClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {dropdownValue}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          className={`${item.size.xsmall === 0 || !item.size.xsmall ? 'disabled' : null }`}
          onClick={handleClick}>Xsmall
        </DropdownItem>
        <DropdownItem
          className={`${item.size.small === 0 || !item.size.small ? 'disabled' : null }`}
          onClick={handleClick}>Small
        </DropdownItem>
        <DropdownItem 
          className={`${item.size.medium === 0 || !item.size.medium ? 'disabled' : null }`}
          onClick={handleClick}>Medium
        </DropdownItem>
        <DropdownItem
          className={`${item.size.large === 0 || !item.size.large ? 'disabled' : null }`}
          onClick={handleClick}>Large
        </DropdownItem>
        <DropdownItem
          className={`${item.size.xlarge === 0 || !item.size.xlarge ? 'disabled' : null }`}
          onClick={handleClick}>XLarge
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SizeDropdown;