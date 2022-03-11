import React, { FC } from 'react';

import { airports } from '../../../mocks/data/airportsList';

import { Wrapper } from './AirportList.styles';

interface props {
  inputA: string;
  inputB: string;
  handleChange: (e: any) => void;
}
export const AirportList: FC<props> = ({ inputA, inputB, handleChange }) => {
  return (
    <Wrapper>
      <ul>
        {airports.map(
          (airport) =>
            airport.toLocaleLowerCase().includes(inputA || inputB) && (
              <li value={airport} key={airport} onClick={() => handleChange(airport)}>
                {airport}
              </li>
            )
        )}
      </ul>
    </Wrapper>
  );
};
