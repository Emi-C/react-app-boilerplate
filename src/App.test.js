import App from './App';

// test('IF we see "world", WHEN click, THEN we see "Moon"', () => {
test('IF we bootstrap,  we see "World"', () => {
  const testApp = new App();

  expect(testApp.find('h1')).toBe('Hello, World!');
});
