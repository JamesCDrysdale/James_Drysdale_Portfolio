import { render, screen } from '@testing-library/react';
import App from './App';

test('Portfolio contains developer\'s name', () => {
  render(<App />);
  const linkElement = screen.getByText(/James Drysdale/i);
  expect(linkElement).toBeInTheDocument();
});
