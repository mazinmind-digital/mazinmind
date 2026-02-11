import { render, screen } from "@testing-library/react";
import { Header } from "../layout/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("renders the logo", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logo = screen.getByAltText(/MazinMind Digital/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders the menu trigger and get started CTA", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /get started/i })).toBeInTheDocument();
  });
});
