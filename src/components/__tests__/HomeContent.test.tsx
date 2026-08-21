import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeroBanner from "../home/HeroBanner";
import HomeContent from "../home/HomeContent";

describe("HomeContent", () => {
  it("has one h1 and no nested main landmark", () => {
    const { container } = render(
      <BrowserRouter>
        <>
          <HeroBanner />
          <HomeContent />
        </>
      </BrowserRouter>,
    );

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(container.querySelectorAll("main main")).toHaveLength(0);
  });
});
