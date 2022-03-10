import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';

import { airports } from '../../../mocks/data/airportsList';

import { Wrapper } from './AirportList.styles';

interface props {
  inputText: string;
}
export const AirportList: FC<props> = ({ inputText }) => {
  const [liText, setLiText] = useState<any>();
  // const liElHandler = (e: any) => {
  //   setLiText({
  //     (e.target.value).toString()
  //   });
  console.log(liText);
  // };

  return (
    <Wrapper>
      <ul>
        {airports.map(
          (airport) =>
            airport.toLocaleLowerCase().includes(inputText?.toLowerCase()) && (
              <li value={airport} key={airport} onClick={() => setLiText({ airport })}>
                {airport}
              </li>
            )
        )}
      </ul>
    </Wrapper>
  );
};
