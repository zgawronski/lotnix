import React, { ChangeEvent, FC } from 'react';

import { airports } from '../../../mocks/data/airportsList';

import { Wrapper } from './AirportList.styles';

interface props {
  inputText: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const AirportList: FC<props> = ({ handleChange, inputText }) => {
  return (
    <Wrapper>
      <ul>
        {airports.map(
          (airport) =>
            airport.toLocaleLowerCase().includes(inputText.to.toLowerCase() || inputText.from.toLowerCase()) && (
              <li value={airport} key={airport} onClick={() => handleChange}>
                {airport}
              </li>
            )
        )}
      </ul>
    </Wrapper>
  );
};
