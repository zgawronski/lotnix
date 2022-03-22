import { FlyPathFinder } from './FlyPathFinder';

describe('The function of finding the shortest flight connection', () => {
  it('Check if it returns singleConnection path', () => {
    const startAirport = 'ATH';
    const endAirport = 'EDI';

    const testPath = FlyPathFinder(startAirport, endAirport);
    expect(testPath.length).toBe(1);
  });

  it('Check if it returns all Shortest way', () => {
    const startAirport = 'BRS';
    const endAirport = 'EDI';

    const testPath = FlyPathFinder(startAirport, endAirport);
    expect(testPath.length).toBe(3);
  });
  it('Check if it returns Shortest way', () => {
    const startAirport = 'BRS';
    const endAirport = 'EDI';

    const testPath = FlyPathFinder(startAirport, endAirport);

    expect(testPath[0].length).toBe(9);
  });
});
