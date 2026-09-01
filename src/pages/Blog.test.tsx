import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import Blog from "./Blog";

describe("Blog", () => {
  it("features the newest post first", () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Blog />
        </BrowserRouter>
      </HelmetProvider>,
    );

    expect(screen.getByText("FEATURED POST")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /can ai predict earthquakes/i,
      }),
    ).toBeInTheDocument();
  });

  it("keeps tag filters in the sidebar", () => {
    const { container } = render(
      <HelmetProvider>
        <BrowserRouter>
          <Blog />
        </BrowserRouter>
      </HelmetProvider>,
    );

    const tagHeading = screen.getByRole("heading", { name: "POPULAR TAGS" });
    expect(tagHeading.closest("aside")).not.toBeNull();
    expect(container.querySelectorAll("aside")).toHaveLength(1);
  });
});
