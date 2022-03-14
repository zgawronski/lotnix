import React, { FC, SetStateAction } from 'react';
import { Input } from '../../atoms/Input/Input';
import { AirportList } from '../../atoms/AirportList/AirportList';
import useDropdown from 'react-dropdown-hook';

type Props = {
  airTo: string;
  setAirTo: (e: SetStateAction<string>) => void;
};

export const AirportTo: FC<Props> = (props) => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  const menuHandler = () => {
    toggleDropdown();
  };

  return (
    <div ref={wrapperRef}>
      <Input
        key="to"
        type="text"
        placeholder="Wybierz lotnisko docelowe"
        onClick={menuHandler}
        value={props.airTo}
        onChange={() => props.setAirTo}
        name="to"
      />
      {dropdownOpen && <AirportList handleChange={props.setAirTo} />}
    </div>
  );
};
