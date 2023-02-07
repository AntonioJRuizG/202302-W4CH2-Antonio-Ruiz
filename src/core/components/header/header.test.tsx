import { render, screen } from "@testing-library/react";
import { Header } from "./header";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  render(<Header />);
  const linkElement = screen.getByRole("heading");
  expect(linkElement).toBeInTheDocument();
});
