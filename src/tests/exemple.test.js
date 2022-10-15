// on récupère une unité à tester
function sum(a, b) {
  return a + b;
}

// un chapitre, pour rendre plus lisible les résultats à l'execution des test
describe('sum', () => {
  // un test
  test('ça devrait donner la somme des paramètres', () => {
    // l'assertion
    expect(sum(1,2)).toBe(3);
  });
});
