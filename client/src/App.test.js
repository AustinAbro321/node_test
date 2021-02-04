import { render, screen } from '@testing-library/react';
import App from './App';

test('Checks Greeting is in document', () => {
  render(<App />);
  const greeting = screen.getByText("Greeting");
  expect(greeting).toBeInTheDocument();
});
