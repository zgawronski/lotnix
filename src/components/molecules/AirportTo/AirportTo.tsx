import React, { FC } from 'react';
import { Input } from '../../atoms/Input/Input';
import useDropdown from 'react-dropdown-hook';
import { AirportList } from '../../atoms/AirportList/AirportList';

type Props = {
  airTo: string;
  setAirTo: (e: any) => void;
};

export const AirportTo: FC<Props> = (props) => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  const menuHandler = () => {
    toggleDropdown();
  };

  const inputA = props.airTo;

  return (
    <div ref={wrapperRef}>
      <Input key="to" type="text" placeholder="dokąd" onClick={menuHandler} value={props.airTo} onChange={props.setAirTo} name="to" />
      {dropdownOpen && <AirportList inputA={inputA} inputB={''} handleChange={props.setAirTo} />}
    </div>
  );
};
