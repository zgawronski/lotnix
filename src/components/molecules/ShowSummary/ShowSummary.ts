export const ShowSummary = (endAirport: string, routes: string[][]) => {
  const ShortestAirRoutes: string[][] = [];
  const shortestRoutes = routes.filter((el: string[]) => el.includes(endAirport));
  if (shortestRoutes.length > 0) {
    shortestRoutes.forEach((el: string[]) => {
      ShortestAirRoutes.push(el);
    });
  } else {
    ShortestAirRoutes.push(['połączenie nie istnieje']);
  }
  return ShortestAirRoutes;
};
