import Team from '../app.js';

const team = new Team();

test('Add char first time', () => {
  team.add('swordsman');
  expect(team.toArray()).toEqual(['swordsman']);
});

test('Add char second time', () => {
  expect(() => team.add('swordsman')).toThrow(new Error('This character already exists!'));
});

test('Add all chars', () => {
  team.addAll('magician', 'deamon', 'swordsman', 'bowman', 'magician');
  expect(team.toArray()).toEqual(['swordsman', 'magician', 'deamon', 'bowman']);
});
