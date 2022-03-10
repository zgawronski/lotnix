import React, { FC } from 'react';

import { airports } from '../../../mocks/data/airportsList';

import { Wrapper } from './AirportList.styles';

type Props = {
  inputText: string;
  handleChange: (e: any) => void;
};
export const AirportList: FC<Props> = ({ inputText, handleChange }) => {
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
