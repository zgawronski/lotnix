import React, { FC } from 'react';
import { airports } from '../../../mocks/data/airportsList';
// import { Input } from '../../atoms/Input/Input';
// import { AirportList } from '../AirportList/AirportList';

type Props = {
  inputText: any;
  // handleInputChange: (e: any) => void;
  handleSelectChange: (e: any) => void;
};

export const DestinationAirports: FC<Props> = (props) => {
  return (
    <>
      <div>
        <select onChange={props.handleSelectChange} name="from">
          {airports.map(
            (airport) =>
              airport.toLocaleLowerCase().includes(props.inputText.from.toLowerCase()) && (
                <option value={airport} key={airport}>
                  {airport}
                </option>
              )
          )}
        </select>
      </div>
      <div>
        <select onChange={props.handleSelectChange} name="to">
          {airports.map(
            (airport) =>
              airport.toLocaleLowerCase().includes(props.inputText.to.toLowerCase()) &&
              !airport.toLocaleLowerCase().includes(props.inputText.from.toLowerCase()) && (
                <option value={airport} key={airport}>
                  {airport}
                </option>
              )
          )}
        </select>
      </div>
    </>
  );
};
