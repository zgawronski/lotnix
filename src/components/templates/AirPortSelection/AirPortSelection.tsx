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

  // console.log(findConnect);
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

  const startAirport: string = findConnect[0];

  const endAirport: string = findConnect[1];

  const allConnections: string[][] = [];

  FCList.forEach((el) => {
    allConnections.push(el);
    allConnections.push([el[1], el[0]]);
    return allConnections;
  });

  const initRoute: string[] = [startAirport];

  let routes: string[][] = [initRoute];

  const GetDeparturesFromAirportWithoutRoutedAirports = (allConnections: string[][], Routes: string[]) => {
    const lastRouteElement = Routes.filter((item: string, i: number, arr: string[]) => {
      if (i + 1 === arr.length) return true;
      else return false;
    })[0];

    const connections = allConnections.filter((el: string[]) => el[0] === lastRouteElement);

    const routedFilteredConnections = connections.filter((el: string[]) => Routes.includes(el[1]) === false);

    return routedFilteredConnections.map((el) => el[1]);
  };

  const GenerateNextLevelRoutes = (allConnections: string[][], routes: string[][]) => {
    const nextLevelRoutes: string[][] = [];

    routes.forEach((route) => {
      const nextLvlConnections: string[] = GetDeparturesFromAirportWithoutRoutedAirports(allConnections, route);

      if (nextLvlConnections.length > 0) {
        nextLvlConnections.forEach((nextConnection) => {
          const nextLevelRoute: string[] = route.filter(() => true);

          nextLevelRoute.push(nextConnection);
          nextLevelRoutes.push(nextLevelRoute);
        });
      }
    });
    return nextLevelRoutes;
  };

  while (true) {
    routes = GenerateNextLevelRoutes(allConnections, routes);
    if (routes.length === 0 || routes.find((x) => x.includes(endAirport))) break;
  }

  const ShowSummary = (endAirport: string, routes: string[][]) => {
    const shortestRoutes = routes.filter((el: string[]) => el.includes(endAirport));
    if (shortestRoutes.length > 0) {
      shortestRoutes.forEach((el: string[]) => {
        console.log(el);
      });
    } else {
      console.log('połączenia nie ma');
    }
  };

  ShowSummary(endAirport, routes);

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
