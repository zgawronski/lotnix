import React, { ChangeEvent, FC } from 'react';
import { Input } from '../../atoms/Input/Input';
import useDropdown from 'react-dropdown-hook';
import { AirportList } from '../AirportList/AirportList';

type Props = {
  inputText: any;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const DestinationAirports: FC<Props> = (props) => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  const menuHandler = () => {
    toggleDropdown();
  };

  return (
    <div ref={wrapperRef}>
      <Input key="from" type="text" onClick={menuHandler} value={props.inputText.from} onChange={props.handleInputChange} name="from" />
      {dropdownOpen && <AirportList handleChange={props.handleInputChange} inputText={props.inputText} />}

      <Input key="to" type="text" onClick={menuHandler} value={props.inputText.to} onChange={props.handleInputChange} name="to" />
      {dropdownOpen && <AirportList handleChange={props.handleInputChange} inputText={props.inputText} />}
    </div>
  );
};
