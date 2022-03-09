import React, { FC } from 'react';

import { airports } from '../../../mocks/data/airportsList';

import { Wrapper } from './AirportList.styles';

interface props {
  inputText: string;
}
export const AirportList: FC<props> = ({ inputText }) => {
  return (
    <Wrapper>
      <select name="list" size={8} id="airportsList">
        {airports.map(
          (airport) =>
            airport.toLocaleLowerCase().includes(inputText.toLowerCase()) && (
              <option value={airport} key={airport}>
                {airport}
              </option>
            )
        )}
      </select>
    </Wrapper>
  );
};
