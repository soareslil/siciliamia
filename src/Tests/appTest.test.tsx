import { fireEvent, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import App from "../App.js";

test("Find info from home page", () => {
  render(<App />);

  const image = screen.getAllByRole("img");
  expect(image).toBeTruthy();

  const homeTxt = screen.getByText(/Home/i);
  expect(homeTxt).toBeInTheDocument();

  const aboutTxt = screen.getByText(/About us/i);
  expect(aboutTxt).toBeInTheDocument();

  const formTxt = screen.getByText(/Enter your API name:/i);
  expect(formTxt).toBeInTheDocument();

  const searchTxt = screen.getByText(/Search/i);
  expect(searchTxt).toBeInTheDocument();

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Search/i));

  const followTxt = screen.getByText(/Follow us/i);
  expect(followTxt).toBeInTheDocument();
});
