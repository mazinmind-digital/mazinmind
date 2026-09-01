import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeroBanner from "../home/HeroBanner";
import HomeContent from "../home/HomeContent";
import { MissedCallWorkflowSection } from "../home/MissedCallWorkflowSection";

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

  it("links to the local-intent service pages from the workflow section", () => {
    render(
      <BrowserRouter>
        <MissedCallWorkflowSection />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole("link", { name: /boston ai receptionist/i }),
    ).toHaveAttribute("href", "/ai-receptionist-boston");
    expect(
      screen.getByRole("link", { name: /home services automation/i }),
    ).toHaveAttribute("href", "/home-services-automation");
  });

  it("shows a trust and authority section with the local-intent pathways", () => {
    render(
      <BrowserRouter>
        <HomeContent />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /why service businesses choose mazinmind/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /see boston ai receptionist/i }),
    ).toHaveAttribute("href", "/ai-receptionist-boston");
    expect(
      screen.getByRole("link", { name: /see home services automation/i }),
    ).toHaveAttribute("href", "/home-services-automation");
  });

  it("shows the audience-fit section for service businesses that live on phone leads", () => {
    render(
      <BrowserRouter>
        <HomeContent />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /built for service businesses that live or die by the next call/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/plumbing and hvac teams/i)).toBeInTheDocument();
    expect(screen.getByText(/electrical and roofing businesses/i)).toBeInTheDocument();
  });
});
