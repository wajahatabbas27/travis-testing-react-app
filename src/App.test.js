import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/AZ/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/shabbir bhai /i);
  expect(linkElement).toBeInTheDocument();
});
