import React, { FC } from 'react';
import { Input } from '../../atoms/Input/Input';
import useDropdown from 'react-dropdown-hook';
import { AirportList } from '../../atoms/AirportList/AirportList';

type Props = {
  airFrom: string;
  setAirFrom: (e: any) => void;
};

export const AirportFrom: FC<Props> = (props) => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  const menuHandler = () => {
    toggleDropdown();
  };

  return (
    <div ref={wrapperRef}>
      <Input key="from" type="text" placeholder="skąd" onClick={menuHandler} value={props.airFrom} onChange={props.setAirFrom} name="from" />
      {dropdownOpen && <AirportList inputText={props.airFrom} handleChange={props.setAirFrom} />}
    </div>
  );
};
