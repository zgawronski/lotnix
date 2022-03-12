import React, { FC, FormEvent, useEffect, useState } from 'react';

import { Button } from '../../atoms/Button/Button';
import { AirportFrom } from '../../molecules/AiportFrom/AirportFrom';
import { AirportTo } from '../../molecules/AirportTo/AirportTo';
import { flightConnectionList as FCList } from '../../../mocks/data/flightConnectionList';
import { Wrapper } from './AirportSelection.styles';

// const initialFormState = {
//   from: '',
//   to: '',
// };

const AirPortSelection: FC = () => {
  const [findConnect, setFindingConnect] = useState<string[]>(['', '']);
  const [airFrom, setAirFrom] = useState<string>('');
  const [airTo, setAirTo] = useState<string>('');
  const [finder, setFinder] = useState<string>('Wyszukaj połączenie');
  // const [inputText, setInputText] = useState<any>(initialFormState);

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputText({
  //     ...inputText,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const finded = 'jest połączenie bezpośrednie';
  const cantFind = 'nie ma połączenia bezpośredniego';

  const buttonHandler = (e: FormEvent) => {
    e.preventDefault();
    const newConnection = [airFrom, airTo];
    setFindingConnect(newConnection);
    // setInputText(initialFormState);
    setAirFrom('');
    setAirTo('');
  };

  const directConnection = FCList.find((singleFly) => singleFly.includes(findConnect[0]) && singleFly.includes(findConnect[1]));

  const isSingleConnection = typeof directConnection !== undefined && directConnection ? finded : cantFind;

  useEffect(() => {
    setFinder(isSingleConnection);
  }, [isSingleConnection]);

  const FCLobject = FCList.map((el) => {
    return {
      first: el[0],
      second: el[1],
    };
  });

  FCLobject.unshift({ first: findConnect[0], second: findConnect[1] });

  console.log(FCLobject);

  return (
    <>
      <Wrapper as="form" onSubmit={buttonHandler}>
        <AirportFrom airFrom={airFrom} setAirFrom={setAirFrom} />
        <AirportTo airTo={airTo} setAirTo={setAirTo} />
        <Button type="submit" name="blue">
          Wyszukaj
        </Button>
      </Wrapper>
      <Wrapper>
        <h1>{finder}</h1>
        <div>
          <h2>z: {findConnect[0]}</h2>
        </div>
        <div>
          <h2>do: {findConnect[1]}</h2>
        </div>
      </Wrapper>
    </>
  );
};

export default AirPortSelection;
