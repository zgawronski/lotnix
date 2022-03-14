import React, { FC, SetStateAction } from 'react';

import { airports } from '../../../mocks/data/airportsList';

import { Wrapper } from './AirportList.styles';

interface props {
  inputText: string;
  handleChange: (e: SetStateAction<string>) => void;
}
export const AirportList: FC<props> = ({ inputText, handleChange }) => {
  return (
    <Wrapper>
      <ul>
        {airports.map(
          (airport) =>
            airport.toLocaleLowerCase().includes(inputText) && (
              <li value={airport} key={airport} onClick={() => handleChange(airport)}>
                {airport}
              </li>
            )
        )}
      </ul>
    </Wrapper>
  );
};
