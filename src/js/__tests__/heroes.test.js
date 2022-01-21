import sortedHeroes from '../app';

test('Следует отсортировать героев по количеству жизней', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const received = sortedHeroes(input);

  expect(received).toEqual(expected);
});
