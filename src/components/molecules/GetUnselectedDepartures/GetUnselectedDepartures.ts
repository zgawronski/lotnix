export const GetUnselectedDepartures = (allConnections: string[][], Routes: string[]) => {
  const lastRouteElement = Routes.filter((item: string, i: number, arr: string[]) => (i + 1 === arr.length ? true : false))[0];

  const connections = allConnections.filter((el: string[]) => el[0] === lastRouteElement);

  const routedFilteredConnections = connections.filter((el: string[]) => Routes.includes(el[1]) === false);

  return routedFilteredConnections.map((el) => el[1]);
};
