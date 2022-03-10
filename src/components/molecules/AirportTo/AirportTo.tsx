import React, { ChangeEvent, FC, useState } from 'react';
import { Input } from '../../atoms/Input/Input';
import useDropdown from 'react-dropdown-hook';
import { AirportList } from '../../atoms/AirportList/AirportList';

export const AirportTo: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  const menuHandler = () => {
    toggleDropdown();
  };

  const [inputText, setInputText] = useState<string>('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  };
  return (
    <div ref={wrapperRef}>
      <Input key="from" type="text" placeholder="skąd" onClick={menuHandler} value={inputText} onChange={inputHandler} id="to" />
      {dropdownOpen && <AirportList inputText={inputText} />}
    </div>
  );
};
