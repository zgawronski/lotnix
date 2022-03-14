import React, { FC, SetStateAction } from 'react';

import { airports } from '../../../mocks/data/airportsList';

import { Wrapper } from './AirportList.styles';

interface props {
  handleChange: (e: SetStateAction<string>) => void;
}
export const AirportList: FC<props> = ({ handleChange }) => {
  return (
    <Wrapper>
      <ul>
        {airports.map((airport) => (
          <li value={airport} key={airport} onClick={() => handleChange(airport)}>
            {airport}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
