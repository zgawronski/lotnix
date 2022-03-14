import React, { FC, FormEvent, useEffect, useState } from 'react';

import { Button } from '../../atoms/Button/Button';
import { AirportFrom } from '../../molecules/AiportFrom/AirportFrom';
import { AirportTo } from '../../molecules/AirportTo/AirportTo';
import { flightConnectionList as FCList } from '../../../mocks/data/flightConnectionList';
import { Wrapper } from './AirportSelection.styles';
import { FlyPathFinder } from '../../atoms/FlyPathFinder/FlyPathFinder';

const AirportSelection: FC = () => {
  const [findConnect, setFindingConnect] = useState<string[]>(['', '']);
  const [airFrom, setAirFrom] = useState<string>('');
  const [airTo, setAirTo] = useState<string>('');
  const [finder, setFinder] = useState<string>('Wyszukaj połączenie');

  // obsługa button - wysyłka danych z input

  const buttonHandler = (e: FormEvent) => {
    e.preventDefault();
    const newConnection: string[] = [airFrom, airTo];
    setFindingConnect(newConnection);
    setAirFrom('');
    setAirTo('');
  };

  // sprawdzenie czy istnieje połączenie bezpośrednie
  const finded = 'jest połączenie bezpośrednie';
  const cantFind = 'nie ma połączenia bezpośredniego, proponujemy przesiadki:';
  const directConnection = FCList.find((singleFly) => singleFly.includes(findConnect[0]) && singleFly.includes(findConnect[1]));

  const isSingleConnection = typeof directConnection !== undefined && directConnection ? finded : cantFind;

  useEffect(() => {
    setFinder(isSingleConnection);
  }, [isSingleConnection]);

  const startAirport: string = findConnect[0];
  const endAirport: string = findConnect[1];

  const ShortestAirRoutes = FlyPathFinder(startAirport, endAirport);

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
        <h2>Szukane połączenie</h2>
        <div>
          <h2>z: {findConnect[0]}</h2>
        </div>
        <div>
          <h2>do: {findConnect[1]}</h2>
        </div>
      </Wrapper>
      <Wrapper>
        <h2>{finder}</h2>
      </Wrapper>
      <Wrapper>
        <div>
          {ShortestAirRoutes.map((routes) => (
            <div key={Math.random()}>
              {routes.map((route) => (
                <h3 key={route}>{route} </h3>
              ))}
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default AirportSelection;
