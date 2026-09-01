export type ArtworkSaleApprovalEntry = {
  artworkId: string;
  commercialUseApproved: boolean;
  canvasHandle: string;
  tshirtHandle: string;
  disclosureText: string;
};

export const aiArtworkDisclosureText =
  "AI-assisted artwork created by MazinMind using the Midjourney web app. MIDJOURNEY™ is a trademark of Midjourney, Inc. MazinMind is not endorsed by or affiliated with Midjourney, Inc.";

export const artSaleApprovalManifest: ArtworkSaleApprovalEntry[] = [
  {
    artworkId: "placeholder",
    commercialUseApproved: false,
    canvasHandle: "not-available",
    tshirtHandle: "not-available",
    disclosureText: aiArtworkDisclosureText,
  },
];

export const getArtworkSaleStatus = (
  artworkId: string,
  _shopifyHandle?: string,
): ArtworkSaleApprovalEntry => {
  const entry = artSaleApprovalManifest.find(
    (item) => item.artworkId === artworkId,
  );

  if (entry) {
    return entry;
  }

  return {
    artworkId,
    commercialUseApproved: false,
    canvasHandle: "not-available",
    tshirtHandle: "not-available",
    disclosureText: aiArtworkDisclosureText,
  };
};
