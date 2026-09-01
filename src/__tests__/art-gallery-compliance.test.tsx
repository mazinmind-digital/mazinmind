import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import ArtGallery from "../pages/ArtGallery";
import {
  aiArtworkDisclosureText,
  artSaleApprovalManifest,
  getArtworkSaleStatus,
} from "../lib/artSaleApprovalManifest";

describe("ArtGallery compliance gates", () => {
  it("defaults every artwork to unapproved for commercial sale", () => {
    expect(
      artSaleApprovalManifest.every((entry) => entry.commercialUseApproved === false),
    ).toBe(true);
  });

  it("prevents a Shopify handle from bypassing the approval gate", () => {
    const status = getArtworkSaleStatus("any-artwork", "canvas-handle-only");

    expect(status.commercialUseApproved).toBe(false);
    expect(status.canvasHandle).toBe("not-available");
    expect(status.tshirtHandle).toBe("not-available");
  });

  it("removes Midjourney from SEO and product copy by default", () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <ArtGallery />
        </BrowserRouter>
      </HelmetProvider>,
    );

    expect(document.title).not.toMatch(/midjourney/i);

    const keywordsMeta = document.head.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      expect(keywordsMeta).not.toHaveAttribute(
        "content",
        expect.stringMatching(/midjourney/i),
      );
    }

    expect(screen.queryByText(/limited edition/i)).not.toBeInTheDocument();
  });

  it("shows a trademark disclaimer when a descriptive reference is displayed", () => {
    expect(aiArtworkDisclosureText).toMatch(/MIDJOURNEY/i);
    expect(aiArtworkDisclosureText).toMatch(/not endorsed by or affiliated with Midjourney, Inc\./i);
  });
});
