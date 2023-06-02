// random.test.js
function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


test('getRandomNumber generates a random number within the specified range', () => {
  const min = 1;
  const max = 100;
  const randomNumber = getRandomNumber(min, max);

  expect(randomNumber).toBeGreaterThanOrEqual(min);
  expect(randomNumber).toBeLessThanOrEqual(max);
});