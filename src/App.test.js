import { screen, render } from "@testing-library/react";
import App from "./App";

import renderer from 'react-test-renderer'

it('should create snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders page header and footer', () => {
  render(<App />);
  const header = screen.getByText('Home');
  expect(header).toBeInTheDocument();
})

it('renders page footer', () => {
  render(<App />);
  const footer = screen.getByText(/2021 TODO/i);
  expect(footer).toBeInTheDocument();
})