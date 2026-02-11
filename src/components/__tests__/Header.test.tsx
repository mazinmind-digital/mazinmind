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

  it("renders navigation links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText(/HOME/i)).toBeInTheDocument();
    expect(screen.getByText(/SERVICES/i)).toBeInTheDocument();
    expect(screen.getByText(/ABOUT/i)).toBeInTheDocument();
    expect(screen.getByText(/CONTACT/i)).toBeInTheDocument();
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
  });
});
