import React, { ChangeEvent, FC } from 'react';

import { airports } from '../../../mocks/data/airportsList';

import { Wrapper } from './AirportList.styles';

interface props {
  inputText: any;
  handleSelectChange: (e: any) => void;
}
export const AirportList: FC<props> = ({ handleSelectChange, inputText }) => {
  return (
    <Wrapper>
      <select onChange={handleSelectChange}>
        {airports.map(
          (airport) =>
            airport.toLocaleLowerCase().includes(inputText.to.toLowerCase() || inputText.from.toLowerCase()) && (
              <option value={airport} key={airport}>
                {airport}
              </option>
            )
        )}
      </select>
    </Wrapper>
  );
};
