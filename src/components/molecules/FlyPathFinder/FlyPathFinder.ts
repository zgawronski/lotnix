import { flightConnectionList as FCList } from '../../../mocks/data/flightConnectionList';
import { NextLevelRoutes } from '../NextLevelRoutes/NextLevelRoutes';
import { ShowSummary } from '../ShowSummary/ShowSummary';

export const FlyPathFinder = (startAirport: string, endAirport: string) => {
  const allConnections: string[][] = [];
  FCList.forEach((el) => {
    allConnections.push(el);
    allConnections.push([el[1], el[0]]);
    return allConnections;
  });

  const initRoute: string[] = [startAirport];

  let routes: string[][] = [initRoute];

  while (true) {
    routes = NextLevelRoutes(allConnections, routes);
    if (routes.length === 0 || routes.find((x) => x.includes(endAirport))) break;
  }

  return ShowSummary(endAirport, routes);
};
