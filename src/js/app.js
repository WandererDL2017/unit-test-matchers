export default function sortedHeroes(heroes) {
  heroes.sort((a, b) => (a.health < b.health ? 1 : -1));
  return heroes;
}
