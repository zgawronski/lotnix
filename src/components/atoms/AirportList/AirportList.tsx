import React, { FC } from 'react';

import { airports } from '../../../mocks/data/airportsList';

import { Wrapper } from './AirportList.styles';

interface props {
  inputText: string;
}
export const AirportList: FC<props> = ({ inputText }) => {
  return (
    <Wrapper>
      <ul>{airports.map((airport) => airport.toLocaleLowerCase().includes(inputText.toLowerCase()) && <li key={airport}>{airport}</li>)}</ul>
    </Wrapper>
  );
};
