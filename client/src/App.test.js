import React from 'react';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Navbar from "./components/Navbar";

test("App renders without crashing", () => {
   //console.log(component);
  const component = render(<App />);
});

test("Navbar renders successfully", () => {
  const component = render(<Navbar />);
})

test("Header content rendered successfully", () => {
  const { getByText } = render(<App />);
  expect(getByText(/search popularity/i))
})

test("darkMode toggle switch renders successfully", () => {
  const { findAllByDisplayValue } = render(<App />);
  findAllByDisplayValue(/toggle/i)
})

test(".playersDiv renders", () => {
  const { findAllByDisplayValue } = render(<App />);
  findAllByDisplayValue(/playersDiv/i)
})
