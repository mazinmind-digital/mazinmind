import { render, screen } from "@testing-library/react";
import { Footer } from "../layout/Footer";
import { BrowserRouter } from "react-router-dom";

describe("Footer", () => {
  it("renders the logo", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const logo = screen.getByAltText(/MazinMind Digital/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders company links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Services/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
  });
});
