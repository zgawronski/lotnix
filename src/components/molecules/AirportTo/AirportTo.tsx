import React, { ChangeEvent, FC, useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import useDropdown from 'react-dropdown-hook';
import { AirportDestination } from '../../atoms/AirportDestination/AirportDestination';

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
      <Input key="from" type="text" placeholder="skąd" onClick={menuHandler} value={inputText} onChange={inputHandler} />
      <Button name="red">Lotnix</Button>
      {dropdownOpen && <AirportDestination inputText={inputText} />}
    </div>
  );
};
