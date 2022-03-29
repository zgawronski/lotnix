import React, { FC } from 'react';
import { airports } from '../../../mocks/data/airportsList';

type Props = {
  inputText: any;
  handleSelectChange: (e: any) => void;
};

export const DestinationAirports: FC<Props> = (props) => {
  return (
    <>
      <div>
        <select onChange={props.handleSelectChange} name="from">
          {airports.map((airport) => (
            <option value={airport} key={airport}>
              {airport}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select onChange={props.handleSelectChange} name="to">
          {airports.map(
            (airport) =>
              !airport.toUpperCase().includes(props.inputText.from.toUpperCase()) && (
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
