import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export type LegalDocumentType = "privacy" | "terms";

type SiteOverlayContextValue = {
  openLegalModal: (document: LegalDocumentType) => void;
  openScheduleModal: () => void;
};

const noop = () => {};

const SiteOverlayContext = createContext<SiteOverlayContextValue>({
  openLegalModal: noop,
  openScheduleModal: noop,
});

export function useSiteOverlay() {
  return useContext(SiteOverlayContext);
}

type PolicySection = {
  heading: string;
  points: string[];
};

const PRIVACY_UPDATED = "February 11, 2026";
const TERMS_UPDATED = "February 11, 2026";
const HUBSPOT_MEETINGS_URL = "https://meetings-na2.hubspot.com/randy-mazin";
const COOKIE_STORAGE_KEY = "mazinmind_cookie_preferences_v1";

const privacySections: PolicySection[] = [
  {
    heading: "1. Information We Collect",
    points: [
      "We may collect information you provide directly, such as your name, email, phone number, company name, and project details when you submit forms, request consultations, or contact us.",
      "We may collect technical information automatically, including browser type, device type, pages viewed, approximate location from IP address, and interaction data.",
      "If you schedule meetings through HubSpot, information submitted through the scheduling experience is also processed by HubSpot under its applicable policies.",
    ],
  },
  {
    heading: "2. How We Use Information",
    points: [
      "To provide, maintain, and improve our services and website experience.",
      "To respond to inquiries, schedule consultations, and communicate about requested services.",
      "To monitor website performance, security, and reliability.",
      "To send service-related or marketing communications where permitted by law, and only where you have not opted out.",
    ],
  },
  {
    heading: "3. Cookies and Similar Technologies",
    points: [
      "We use essential cookies to operate the website and optional analytics or marketing cookies to understand and improve performance.",
      "You can accept, decline, or manage optional cookie preferences using our cookie banner controls.",
      "Declining optional cookies does not affect core website functionality.",
    ],
  },
  {
    heading: "4. Sharing of Information",
    points: [
      "We do not sell your personal information.",
      "We may share limited information with service providers that help us operate the website and business functions, such as hosting, analytics, scheduling, or communication tools.",
      "We may disclose information when required by law, legal process, or to protect rights, safety, and security.",
    ],
  },
  {
    heading: "5. Data Retention and Security",
    points: [
      "We retain information for as long as reasonably necessary for business and legal purposes.",
      "We use reasonable administrative, technical, and organizational safeguards; however, no internet transmission or storage method is guaranteed to be fully secure.",
    ],
  },
  {
    heading: "6. Your Rights and Choices",
    points: [
      "You may request access, correction, or deletion of personal information by contacting us.",
      "You may opt out of marketing communications at any time using unsubscribe options or by contacting us directly.",
      "State privacy rights may apply depending on your location and applicable law.",
    ],
  },
  {
    heading: "7. Third-Party Services and Links",
    points: [
      "Our website may contain links to third-party websites or services. Their privacy practices are governed by their own policies.",
      "We are not responsible for third-party privacy or security practices outside our website.",
    ],
  },
  {
    heading: "8. Changes to This Policy",
    points: [
      "We may update this Privacy Policy periodically. Updates are effective when posted with the revised date.",
      "Material changes may also be communicated through website notices where appropriate.",
    ],
  },
];

const termsSections: PolicySection[] = [
  {
    heading: "1. Acceptance of Terms",
    points: [
      "By accessing or using this website, you agree to these Terms of Service and all applicable laws.",
      "If you do not agree with these terms, do not use the website.",
    ],
  },
  {
    heading: "2. Services and Content",
    points: [
      "Website content is provided for general information and business inquiry purposes.",
      "Descriptions of services, artwork, pricing, and availability may change without notice.",
      "We reserve the right to modify or discontinue website features at any time.",
    ],
  },
  {
    heading: "3. Acceptable Use",
    points: [
      "You agree not to misuse the website, interfere with operations, attempt unauthorized access, or violate applicable law.",
      "You must not upload malicious code, engage in scraping beyond permitted use, or perform abusive automated activity.",
    ],
  },
  {
    heading: "4. Intellectual Property",
    points: [
      "Unless otherwise noted, website content, branding, and design elements are owned by MazinMind Digital and protected by intellectual property laws.",
      "Artwork displayed in the gallery may not be copied, redistributed, or commercially used without prior written permission.",
    ],
  },
  {
    heading: "5. Purchases and Inquiries",
    points: [
      "Submitting a purchase inquiry does not create a binding sale agreement until confirmed in writing.",
      "Prices, production timelines, shipping, and fulfillment terms are finalized during order confirmation.",
      "We may decline transactions at our discretion where necessary for operational, legal, or security reasons.",
    ],
  },
  {
    heading: "6. Third-Party Tools",
    points: [
      "Scheduling, analytics, payment, or communication features may rely on third-party services.",
      "Your use of those services may be subject to separate third-party terms and privacy policies.",
    ],
  },
  {
    heading: "7. Warranty Disclaimer and Liability Limits",
    points: [
      "The website is provided on an as-is and as-available basis without warranties of any kind, to the maximum extent permitted by law.",
      "To the extent permitted by law, MazinMind Digital is not liable for indirect, incidental, special, consequential, or punitive damages related to website use.",
    ],
  },
  {
    heading: "8. Governing Law",
    points: [
      "These terms are governed by applicable laws of the United States and the Commonwealth of Massachusetts, without regard to conflict of law principles.",
      "Any disputes will be handled in appropriate courts with jurisdiction over Boston, Massachusetts, unless otherwise required by law.",
    ],
  },
  {
    heading: "9. Changes to Terms",
    points: [
      "We may update these Terms of Service from time to time. Continued use of the website after updates constitutes acceptance of revised terms.",
    ],
  },
];

function LegalDocumentModal({
  openDocument,
  onOpenDocumentChange,
}: {
  openDocument: LegalDocumentType | null;
  onOpenDocumentChange: (document: LegalDocumentType | null) => void;
}) {
  const isOpen = openDocument !== null;
  const isPrivacy = openDocument === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";
  const updatedDate = isPrivacy ? PRIVACY_UPDATED : TERMS_UPDATED;
  const sections = isPrivacy ? privacySections : termsSections;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => onOpenDocumentChange(open ? openDocument : null)}>
      <DialogContent className="w-[96vw] max-w-3xl border-primary/30 p-0 sm:rounded-2xl">
        <DialogHeader className="border-b border-border px-6 py-5 text-left">
          <DialogTitle className="text-2xl font-display tracking-wide">{title}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Last updated: {updatedDate}
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-[65vh] overflow-y-auto px-6 py-5">
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              This document is provided for general informational purposes and describes standard
              website privacy and use practices for MazinMind Digital.
            </p>
            {sections.map((section) => (
              <section key={section.heading} className="space-y-2">
                <h3 className="font-semibold text-foreground">{section.heading}</h3>
                {section.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </section>
            ))}
            <p>
              Questions about this document can be sent to{" "}
              <a className="text-primary hover:underline" href="mailto:info@mazinmind.digital">
                info@mazinmind.digital
              </a>
              .
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ScheduleConsultationModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-[96vw] max-w-5xl border-primary/30 p-0 sm:rounded-2xl">
        <DialogHeader className="border-b border-border px-6 py-5 text-left">
          <DialogTitle className="text-2xl font-display tracking-wide">Schedule a Free Consultation</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Choose a time directly through our HubSpot scheduling form.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 px-6 py-5">
          <iframe
            title="Schedule a free consultation"
            src={`${HUBSPOT_MEETINGS_URL}?embed=true`}
            className="h-[60vh] w-full rounded-xl border border-border bg-secondary/30"
          />
          <p className="text-sm text-muted-foreground">
            If the embedded scheduler does not load, use{" "}
            <a
              href={HUBSPOT_MEETINGS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              this direct HubSpot scheduling link
            </a>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

function CookieConsentBanner({
  onOpenLegal,
}: {
  onOpenLegal: (document: LegalDocumentType) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isManaging, setIsManaging] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!saved) {
      setIsVisible(true);
      return;
    }

    try {
      const parsed = JSON.parse(saved) as CookiePreferences;
      setAnalytics(Boolean(parsed.analytics));
      setMarketing(Boolean(parsed.marketing));
    } catch {
      setIsVisible(true);
    }
  }, []);

  const persistPreferences = (next: CookiePreferences) => {
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(next));
    setIsVisible(false);
    setIsManaging(false);
  };

  const acceptAll = () => {
    persistPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
    });
  };

  const declineOptional = () => {
    persistPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
    });
  };

  const saveCustom = () => {
    persistPreferences({
      necessary: true,
      analytics,
      marketing,
      updatedAt: new Date().toISOString(),
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-3xl rounded-2xl border border-primary/30 bg-background/95 p-5 shadow-elevated backdrop-blur-xl">
      <div className="space-y-4">
        <div>
          <h3 className="mb-2 text-lg font-display font-bold tracking-wide">Cookie Preferences</h3>
          <p className="text-sm text-muted-foreground">
            We use essential cookies to run this site and optional cookies to improve analytics and
            marketing performance. You can accept all, decline optional cookies, or manage
            preferences.
          </p>
        </div>

        {isManaging && (
          <div className="rounded-xl border border-border bg-secondary/30 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Essential cookies</span>
              <span className="text-xs font-semibold text-primary">Always active</span>
            </div>
            <div className="mb-3 flex items-center justify-between">
              <label htmlFor="cookie-analytics" className="text-sm text-foreground">
                Analytics cookies
              </label>
              <input
                id="cookie-analytics"
                type="checkbox"
                className="h-4 w-4"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <label htmlFor="cookie-marketing" className="text-sm text-foreground">
                Marketing cookies
              </label>
              <input
                id="cookie-marketing"
                type="checkbox"
                className="h-4 w-4"
                checked={marketing}
                onChange={(event) => setMarketing(event.target.checked)}
              />
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <Button type="button" className="bg-gradient-primary" onClick={acceptAll}>
            Accept All
          </Button>
          <Button type="button" variant="outline" onClick={declineOptional}>
            Decline Optional
          </Button>
          {isManaging ? (
            <Button type="button" variant="outline" onClick={saveCustom}>
              Save Preferences
            </Button>
          ) : (
            <Button type="button" variant="outline" onClick={() => setIsManaging(true)}>
              Manage Preferences
            </Button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <button
            type="button"
            className="hover:text-primary"
            onClick={() => onOpenLegal("privacy")}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            className="hover:text-primary"
            onClick={() => onOpenLegal("terms")}
          >
            Terms of Service
          </button>
        </div>
      </div>
    </div>
  );
}

export function SiteOverlaysProvider({ children }: { children: ReactNode }) {
  const [openDocument, setOpenDocument] = useState<LegalDocumentType | null>(null);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const contextValue = useMemo(
    () => ({
      openLegalModal: (document: LegalDocumentType) => setOpenDocument(document),
      openScheduleModal: () => setIsScheduleOpen(true),
    }),
    [],
  );

  return (
    <SiteOverlayContext.Provider value={contextValue}>
      {children}
      <LegalDocumentModal openDocument={openDocument} onOpenDocumentChange={setOpenDocument} />
      <ScheduleConsultationModal isOpen={isScheduleOpen} onOpenChange={setIsScheduleOpen} />
      <CookieConsentBanner onOpenLegal={(document) => setOpenDocument(document)} />
    </SiteOverlayContext.Provider>
  );
}
