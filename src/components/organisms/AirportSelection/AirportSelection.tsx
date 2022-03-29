import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';

import { Button } from '../../atoms/Button/Button';
import { DestinationAirports } from '../../molecules/DestinationAirports/DestinationAirports';
//import { AirportTo } from '../../molecules/AirportTo/AirportTo';
import { flightConnectionList as FCList } from '../../../mocks/data/flightConnectionList';
import { Wrapper } from './AirportSelection.styles';
import { FlyPathFinder } from '../../molecules/FlyPathFinder/FlyPathFinder';

const initialFormState = {
  from: '',
  to: '',
};

const AirportSelection: FC = () => {
  const [inputText, setInputText] = useState(initialFormState);
  const [findConnect, setFindingConnect] = useState<string[]>(['', '']);
  const [finder, setFinder] = useState<string>('Wyszukaj połączenie');

  console.log(inputText);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  // button handler - export data from input

  const buttonHandler = (e: FormEvent) => {
    e.preventDefault();
    const newConnection: string[] = [inputText.from.toUpperCase(), inputText.to.toUpperCase()];
    setFindingConnect(newConnection);
    setInputText(initialFormState);
  };

  const startAirport: string = findConnect[0];
  const endAirport: string = findConnect[1];

  const ShortestAirRoutes = FlyPathFinder(startAirport, endAirport);
  const numberOfConnect: number = ShortestAirRoutes[0].length >= 3 ? ShortestAirRoutes[0].length - 2 : 0;

  // sprawdzenie czy istnieje połączenie bezpośrednie
  const finded = 'jest połączenie bezpośrednie';
  const cantFind = `nie ma połączenia bezpośredniego, proponujemy  z ${numberOfConnect} międzylądowaniami`;
  const directConnection = FCList.find((singleFly) => singleFly.includes(findConnect[0]) && singleFly.includes(findConnect[1]));

  const isSingleConnection = typeof directConnection !== undefined && directConnection ? finded : cantFind;

  useEffect(() => {
    setFinder(isSingleConnection);
  }, [isSingleConnection]);

  return (
    <>
      <Wrapper as="form" onSubmit={buttonHandler}>
        <DestinationAirports inputText={inputText} handleSelectChange={handleSelectChange} />
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
