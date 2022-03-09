import React, { FC } from 'react';

import { flightConnectionList } from '../../../mocks/data/flightConnectionList';

import { Wrapper } from '../AirportList/AirportList.styles';

interface props {
  inputText: string;
}

export const AirportDestination: FC<props> = ({ inputText }) => {
  return (
    <Wrapper>
      <ul>
        {flightConnectionList.map(
          (airport) => airport[1].toLocaleLowerCase().includes(inputText.toLowerCase()) && <li key={airport[0]}>{airport[1]}</li>
        )}
      </ul>
    </Wrapper>
  );
};
