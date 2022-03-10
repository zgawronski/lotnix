import React, { ChangeEvent, FC, useState } from 'react';

import { airports } from '../../../mocks/data/airportsList';

import { Wrapper } from './AirportList.styles';

interface props {
  inputText: string;
}
export const AirportList: FC<props> = ({ inputText }) => {
  const [liText, setLiText] = useState<string>('');
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setLiText(text);
  };
  console.log(liText);

  return (
    <Wrapper>
      <ul>
        {airports.map(
          (airport) =>
            airport.toLocaleLowerCase().includes(inputText.toLowerCase()) && (
              <li value={airport} key={airport} onClick={(e) => inputHandler}>
                {airport}
              </li>
            )
        )}
      </ul>
    </Wrapper>
  );
};
