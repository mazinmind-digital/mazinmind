# Marketing, Lead Generation & Customer Communication Standard

**Policy version:** 1.0  
**Effective:** 2026-11-01  
**Canonical policy (Outline):** https://mazinmind.getoutline.com/doc/marketing-lead-generation-customer-communication-standard-rtRv9pAPqN  
**Related operating standards:** https://mazinmind.getoutline.com/doc/mazinmind-digital-operating-standards-xuCeAgapXo  
**Related Zoho CRM runbook:** https://mazinmind.getoutline.com/doc/zoho-crm-website-integration-discovery-and-setup-QqvNcPLKcS

> Outline is the canonical human-readable policy. This file is the versioned GitHub copy. Keep the version/date and key requirements aligned whenever either changes.

## Non-negotiable principles

- Comply with applicable law, platform policies, carrier requirements, and recipient preferences before sending.
- No spam, deceptive subjects, fake personalization, fabricated urgency, or unsupported claims.
- Publicly listed contact information is not blanket permission for every channel or campaign.
- If consent, legal applicability, required disclosures, or opt-out handling is unclear, pause the campaign.
- Never claim an integration, automation, lead delivery, or campaign is working without direct evidence.

## Legal and compliance review

Before launch, check current primary sources and applicable requirements, including as relevant:

- **Commercial email:** CAN-SPAM requirements, accurate sender and subject information, required physical postal address, a functioning opt-out mechanism, and timely honoring of opt-outs.
- **SMS and calls:** applicable TCPA/FCC rules, state laws, carrier policies, registration requirements, and documented consent appropriate to the message and technology. Support STOP/HELP handling where required.
- **Privacy/security:** data minimization, access controls, purpose and retention, secure CRM data handling, and no sensitive data in public issues or repositories.
- **Platform rules:** CRM, email provider, SMS provider, social platform, and advertising requirements.

This is an operational checklist, not legal advice. Obtain qualified legal review for novel, high-volume, regulated, or ambiguous campaigns.

## Audience segmentation

Keep inbound inquiries, marketing opt-ins, cold prospects, existing customers, dormant leads, and opted-out contacts distinct. A contact form submission is not automatically blanket consent to ongoing promotional email or SMS. Record consent source, time, scope, and wording/version where appropriate. Keep suppression data consistent across tools and never re-add opted-out contacts to bypass a suppression.

## Evidence-based pipeline design

1. Define the audience, problem, offer, outcome, and primary call to action.
2. Review current credible research and provider guidance relevant to the industry, audience, channel, and buying cycle.
3. Separate legal requirements, vendor benchmarks, and MazinMind's own results. Treat vendor benchmarks as directional, not universal.
4. Give every touch a purpose, and define stop conditions and suppression handling.
5. Make messages useful, truthful, and relevant.
6. Test delivery, links, personalization, mobile layout, tracking, duplicates, unsubscribe/STOP handling, and failure paths.
7. Measure qualified replies, meetings, conversions, revenue, bounces, complaints, and opt-outs. Opens alone are not a success metric.
8. Reduce frequency or stop when negative signals rise.

## Initial inbound nurture hypothesis

For inquiries that reasonably expect follow-up, tailor the cadence to the request and channel permissions:

| Timing | Purpose |
|---|---|
| Immediately | Confirm receipt and explain the next step |
| Day 2 | Share one relevant practical insight |
| Day 5 | Offer a useful readiness checklist or diagnostic |
| Day 9 | Explain a low-risk pilot with scope and success metric |
| Day 14 | Close the loop respectfully with an easy stop path |
| Day 30 | Selective re-engagement only when relevant and permitted |

This is a testable starting hypothesis, not a universal proven schedule. Research current benchmarks for the specific industry and validate against MazinMind results. Stop when a person replies, books, declines, opts out, or meets another defined exit condition.

## Cold prospecting

- Research business fit and verify the planned channel is lawful before outreach.
- Do not scrape/import contacts for indiscriminate blasts.
- Do not send SMS marketing to researched contacts without required authorization.
- Avoid fake familiarity or pretending the person requested contact.
- Limit follow-ups and honor negative responses and opt-outs.
- Record source, research date, qualification rationale, channel, outreach status, and suppression status.
- A CRM record or Email Opt Out=false is not proof of consent.

## CRM automation safeguards

Before enabling any workflow, verify correct triggers and exit conditions, consent checks, suppression/opt-out handling, duplicate prevention, bounded retries, delivery/failure tracking, current plan limits, costs, required disclosures, template completeness, and a pause/rollback path. Test with an approved recipient or test record. Do not create fake production leads or send unsolicited tests. If the CRM edition does not support a required capability, document the limitation and do not claim the automation is active.

## Template launch gate

Do not send templates with unresolved placeholders, missing required postal address/unsubscribe details, unverified claims, or unapproved pricing. Validate sender identity, subject, content, links, consent, mobile rendering, suppression, and tracking.

## Source-of-truth and synchronization

- **Outline:** canonical policy and playbooks.
- **GitHub:** versioned copy, code, templates, and implementation history.
- **Jira:** work items, ownership, acceptance criteria, and rollout status.
- When policy changes, update Outline first, then update this file and the relevant Jira work item. Link the related GitHub Discussion when one is updated.
- Do not claim a native GitHub Discussion was changed unless the write is directly verified. If tooling cannot create/update Discussions, track the limitation in a GitHub issue and update the Discussion through a supported UI/API workflow.
- Keep version/date aligned and avoid duplicating volatile implementation status in this policy.

## Pre-send checklist

- [ ] Audience, purpose, and stop conditions are defined.
- [ ] Current legal, platform, and carrier requirements have been checked.
- [ ] Consent/lawful basis and channel-specific opt-out status are verified.
- [ ] Cadence is evidence-informed and appropriate to the buying cycle.
- [ ] Content is truthful, useful, and complete.
- [ ] Required disclosures and unsubscribe/STOP handling work.
- [ ] The workflow is supported by the current plan and tested.
- [ ] Measurement and pause/rollback controls are in place.
- [ ] Outline and GitHub copies match the current policy version.
