import { GetUnselectedDepartures } from '../GetUnselectedDepartures/GetUnselectedDepartures';

export const NextLevelRoutes = (allConnections: string[][], routes: string[][]) => {
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
