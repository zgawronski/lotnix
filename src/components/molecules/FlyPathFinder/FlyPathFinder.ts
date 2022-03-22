import { flightConnectionList as FCList } from '../../../mocks/data/flightConnectionList';
import { GetUnselectedDepartures } from '../GetUnselectedDepartures/GetUnselectedDepartures';

export const FlyPathFinder = (startAirport: string, endAirport: string) => {
  const allConnections: string[][] = [];
  FCList.forEach((el) => {
    allConnections.push(el);
    allConnections.push([el[1], el[0]]);
    return allConnections;
  });

  const initRoute: string[] = [startAirport];

  let routes: string[][] = [initRoute];

  const GenerateNextLevelRoutes = (allConnections: string[][], routes: string[][]) => {
    const nextLevelRoutes: string[][] = [];

    routes.forEach((route) => {
      const nextLvlConnections: string[] = GetUnselectedDepartures(allConnections, route);

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

  const ShortestAirRoutes: string[][] = [];
  const ShowSummary = (endAirport: string, routes: string[][]) => {
    const shortestRoutes = routes.filter((el: string[]) => el.includes(endAirport));
    if (shortestRoutes.length > 0) {
      shortestRoutes.forEach((el: string[]) => {
        ShortestAirRoutes.push(el);
      });
    } else {
      ShortestAirRoutes.push(['połączenie nie istnieje']);
    }
  };

  ShowSummary(endAirport, routes);

  return ShortestAirRoutes;
};
