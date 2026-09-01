import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../layout/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("renders the logo", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const logo = screen.getByAltText(/Mazinmind.Digital/i);
    expect(logo).toBeInTheDocument();
  });

  it("renders the menu trigger and get started CTA", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /get started/i }),
    ).toBeInTheDocument();
  });

  it("shows the local-intent service links in the menu", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    fireEvent.pointerDown(screen.getByRole("button", { name: /menu/i }));

    expect(
      screen.getByRole("menuitem", { name: /boston ai receptionist/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: /home services/i }),
    ).toBeInTheDocument();
  });
});
