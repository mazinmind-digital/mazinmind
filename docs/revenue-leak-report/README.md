# Revenue Leak Report MVP

Product requirements and engineering guardrails for the MazinMind Digital Revenue Leak Report.

## Status
Planning / discovery. This document does not indicate that checkout, report generation, or delivery is implemented.

## Initial offer
- Starter: $49 one-time
- Growth: $149 one-time (recommended)
- Premium: $399 one-time, including a clearly scoped human review
- Start in Stripe test mode. Live products/prices and production checkout require a separate explicit approval.

## Customer journey
1. Responsive landing page and pricing.
2. Multi-step assessment with conditional industry-specific questions and "not sure" responses.
3. Server-side draft assessment/order creation.
4. Stripe-hosted Checkout Session.
5. Signed Stripe webhook verifies payment and triggers idempotent fulfillment.
6. Deterministic calculations + versioned rules + structured AI explanation.
7. Branded interactive report and print-optimized PDF.
8. Secure report access and email delivery; SMS link only when requested and authorized.
9. Owner notifications and idempotent Zoho CRM upsert.
10. Delivery status, retries, and authenticated admin visibility.

## Technical requirements
- Existing web app uses React, TypeScript, and Vite. Audit current routes, design system, deployment, and backend before implementing.
- Browser code must never contain Stripe secret keys, AI API keys, or provider credentials.
- Stripe Checkout is created server-side. Verify webhook signatures. Never fulfill based on a success redirect alone.
- Use idempotency for payment fulfillment, report generation, CRM upserts, and notifications.
- Use a managed server-side runtime and database. Static hosting alone cannot safely handle secrets, webhooks, durable jobs, or server-side PDF generation.
- Report pages and PDFs must not be public by predictable URL. Use authenticated access or revocable/expiring tokens.
- Financial calculations must be deterministic and unit-tested. Separate revenue, gross profit, and cost savings. Record assumptions and avoid double-counting overlapping leaks.
- AI may explain validated facts and calculations; it may not invent benchmarks, customer facts, or guaranteed outcomes. Validate structured output.
- Store minimal personal data and restrict access; define retention/deletion and audit practices.

## Initial intake
- Company: name, website or no-website choice, industry, business model, size, operating region, currency, business objective.
- Contact: name, role, email; phone only if SMS is selected; distinct consent for report delivery and promotional messages.
- Revenue: annual/monthly revenue, average sale value, gross margin, new customers, qualified leads, conversion rate, time to close, retention, overdue invoices where relevant.
- Lead generation: lead sources, website traffic if known, inquiries, response time, missed calls, form conversion, ad spend/cost per lead if known, CRM and follow-up.
- Sales: CRM, lead assignment, pipeline, follow-up cadence, proposal turnaround/acceptance, lost reasons, abandoned cart/booking recovery.
- Operations: accounting, scheduling, support, marketing tools, repetitive hours, optional labor cost, manual handoffs, billing errors, support volume, duplicate data, process documentation.
- Technology/readiness: current systems, budget, timeline, technical resources, security/compliance constraints, build/no-code preference, service interests.
- Conditional industry modules for local services, professional services, ecommerce, and subscription/SaaS businesses.

## Report structure
- Executive summary and documented health score.
- Visual opportunity dashboard.
- Findings with supporting answers, confidence, assumptions, modeled impact range, likely cause, fix, and related MazinMind service.
- Prioritized 7/30/90-day roadmap.
- Scenario assumptions and implementation cost/payback ranges when defensible.
- Relevant consultation and proposal CTAs.
- Plain-language statement that estimates are directional and not guaranteed results.

## Order states
Draft -> Submitted -> Awaiting Payment -> Paid -> Generating -> Ready -> Delivered.
Exception states: Payment Failed, Generation Failed, Delivery Failed, Refunded/Cancelled.
A delivery failure must not erase a completed report. Duplicate webhook events must not duplicate reports or messages.

## Communication and compliance
- Transactional report delivery is separate from promotional email/SMS.
- Capture consent purpose, channel, text/version, timestamp, and source.
- Honor email unsubscribes, SMS STOP, suppression lists, frequency limits, and channel-specific permissions.
- Do not send sensitive financial details or unrestricted report URLs by SMS.
- Review applicable laws, provider/carrier requirements, privacy policy, terms, refund policy, and tax obligations before launch.

## Phased delivery
1. Repository/deployment audit, assessment schema, calculation rules/tests, test-mode Checkout/webhook, report template.
2. Email/SMS provider integration, secure access, Zoho upsert, retries, admin status.
3. Interactive dashboard, industry modules, analytics and controlled pricing experiments.
4. Optional customer-authorized data integrations for premium evidence-based audits.

## Acceptance criteria
- Mobile and desktop flow works end-to-end.
- No paid report without verified payment.
- Duplicate webhooks do not duplicate fulfillment.
- Calculations have tests and assumptions are visible.
- Reports are access-controlled and links can be revoked/expire.
- SMS promotional consent is never inferred from report-delivery consent.
- Delivery and CRM failures are visible and retryable.
- Live-mode launch is gated on explicit approval and successful end-to-end test-mode verification.

## Manual inputs needed before production
1. Confirm internal alert email and phone.
2. Select/verify transactional email provider and branded sending domain.
3. Select SMS provider and complete required business/brand registration.
4. Confirm backend and database hosting; static GitHub Pages alone is insufficient for secure fulfillment.
5. Confirm Premium human-review scope.
6. Approve privacy policy, terms, refund policy, and report disclaimer.
7. Verify Zoho CRM fields and ownership routing.
8. Explicitly approve live Stripe products/prices after test-mode QA.
