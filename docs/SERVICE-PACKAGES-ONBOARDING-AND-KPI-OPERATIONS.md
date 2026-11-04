# MazinMind Digital Service Packaging, Onboarding & KPI Operations

**Version:** 1.0 | **Prepared:** 2026-11-04  
**Status:** Proposed operating standard. Pricing, contract terms, and public claims require CEO approval.

## 1. Service offer design

### Offer A: Lead-Handling & Revenue Leak Diagnostic
Purpose: map inquiry channels, response gaps, callback ownership, and improvement opportunities.

Deliverables: 60–90 minute discovery; current workflow map; baseline metrics agreed with customer; prioritized opportunities with assumptions/confidence; proposed 30-day pilot scope, dependencies, risks, and success measures.

Exclusions: no guaranteed revenue recovery, no autonomous dispatch/diagnosis/quoting, no unapproved system access, and no production changes during diagnostic.

### Offer B: Workflow Automation Pilot
Implement one narrow workflow in a controlled test or customer-approved environment. Candidate scope: website lead intake to CRM, deduplication, internal notification/task creation, or consent-aware follow-up for contacts with required permission.

Controls: named customer owner; approved field mapping; least-privilege access; test records; documented rollback; error/retry behavior; retention rules; customer acceptance test.

Proposed duration: 30 days after prerequisites are met. The pilot clock does not start before access, scope, and acceptance criteria are approved.

### Offer C: AI-Assisted Receptionist / Intake
Design and, once production architecture is ready, implement approved FAQs, structured inquiry capture, urgency classification, human handoff, CRM event, and optional telephony/SMS/calendar integrations only when configured and tested.

Exclusions: medical/legal/financial advice, autonomous emergency dispatch, unverified prices, unverified availability, guaranteed bookings, and messages without required consent.

### Offer D: Ongoing Optimization & Support
Potential monthly scope: workflow health review, error monitoring, approved template updates, limited change allowance, and monthly KPI review. Define support hours, response targets, channel, included changes, and out-of-scope work in a signed statement of work.

## 2. Pricing and unit economics

No price is approved here. Do not publish or quote prices until the CEO approves the numbers and current vendor costs are verified.

Monthly contribution = customer monthly fee minus telephony, SMS, model usage, hosting, automation/CRM, monitoring, payment fees, support labor, and allocated overhead.

Pilot contribution = setup fee plus pilot fees minus implementation labor, pilot usage, onboarding, and support costs.

For each cost assumption record provider/plan, current price, billing unit, included allowance/overage, low/base/high usage, currency, tax treatment, retrieval date, and fixed/variable/pass-through classification. Do not invent vendor prices or usage volumes. Keep setup, subscription, overages, and professional services separate.

## 3. Pilot agreement and success criteria

Before starting, record customer entity/sponsor, problem statement and baseline, in-scope workflow and excluded actions, systems/access scopes/data fields, technical and business owners, synthetic test data, acceptance scenarios, privacy/consent/retention/deletion/vendor review, approved price/payment/usage caps/support/exit terms, rollback and incident contacts, pilot dates, and decision meeting.

Possible success measures: inquiries captured, time to first response, callback completion, duplicate lead rate, handoff completion, failed automation count, customer usability, and cost per handled inquiry. Report revenue impact only when customer baseline and outcome data are reliable.

## 4. Customer onboarding checklist

### Before access
- [ ] Signed scope/terms and approved pricing.
- [ ] Customer sponsor and day-to-day owner identified.
- [ ] Business hours, service territory, holidays, emergency rules documented.
- [ ] Approved FAQs, services, and prohibited answers collected.
- [ ] CRM, phone, calendar, and webform systems inventoried.
- [ ] Data flow and vendor review completed.
- [ ] Privacy/consent language and retention/deletion rules approved.
- [ ] Least-privilege credentials provisioned through secure secret sharing, never email/chat.
- [ ] Test environment and synthetic test records available.

### Configuration and validation
- [ ] Field mapping and duplicate rules reviewed with customer.
- [ ] Human escalation recipients and fallback behavior tested.
- [ ] Time zone and business-hours behavior tested.
- [ ] Provider failure, timeout, retry, and rate-limit behavior tested.
- [ ] Consent and suppression rules tested for each channel.
- [ ] Customer tests normal, boundary, malformed, and failure cases.
- [ ] Logs/dashboards redact personal data and secrets.
- [ ] Customer signs off on acceptance results.

### Launch and handoff
- [ ] Explicit written launch approval from customer.
- [ ] Rollback owner and procedure confirmed.
- [ ] Monitoring/alert recipients confirmed.
- [ ] Support channel and severity definitions shared.
- [ ] Known limitations and out-of-scope requests documented.
- [ ] First-week review scheduled.
- [ ] Credentials, ownership, and documentation handed over appropriately.

## 5. Support and escalation

| Severity | Example | Initial handling |
|---|---|---|
| Sev 1 - Critical | Data exposure, unauthorized access, unsafe automated action, complete production outage | Stop affected workflow, preserve minimal evidence, notify customer owner, revoke compromised access, begin incident procedure |
| Sev 2 - High | Core lead capture or CRM handoff unavailable without safe workaround | Acknowledge during agreed support hours, disable unsafe retries, use documented manual fallback |
| Sev 3 - Normal | Single workflow defect, delayed notification, noncritical report issue | Log ticket, reproduce with synthetic data, prioritize in agreed support window |
| Sev 4 - Request | New feature, content change, integration, or scope expansion | Estimate separately and obtain written approval |

Support targets must be contracted per package. Do not advertise 24/7 support or response SLAs until staffing and monitoring support them.

## 6. Weekly business KPI scorecard

| Metric | Definition | Source |
|---|---|---|
| Prospects researched | New unique businesses with source and fit rationale | Prospect list/CRM |
| Prospects qualified | Records meeting ICP checklist | CRM |
| Outreach attempts | Actual messages/calls by channel | CRM/provider logs |
| Replies | Human responses, excluding auto-replies | CRM |
| Discovery calls | Completed conversations, not merely scheduled | Calendar/CRM |
| Demos | Completed demos with feedback recorded | CRM |
| Proposals | Written scoped proposals delivered | CRM |
| Wins/losses | Signed/approved work or explicit decline | CRM/contracts |
| Pipeline value | Open qualified opportunity value, clearly labeled forecast | CRM |
| Booked revenue | Revenue under accounting policy | Finance/accounting |
| Recurring revenue | Active contracted recurring fees, excluding usage estimates | Contracts/invoices |
| Delivery health | Incidents, failed workflows, support backlog | Monitoring/Jira |
| Consent/suppression health | Opt-outs, complaints, bounces, STOP events, unresolved suppressions | CRM/provider |
| Customer outcomes | Agreed baseline versus measured pilot results | Customer-approved report |

Funnel formulas:
- Reply rate = human replies / delivered outreach.
- Discovery conversion = completed discovery calls / qualified prospects contacted.
- Demo conversion = completed demos / completed discovery calls.
- Proposal conversion = proposals delivered / completed demos.
- Win rate = wins / decided proposals; exclude open proposals.
- Pipeline coverage = open qualified pipeline / target for same period.

Report counts alongside percentages. Small samples are noisy. Do not benchmark against invented industry averages. Keep forecast/pipeline separate from actual revenue.

### Weekly review agenda (30 minutes)
1. Verify data sources and missing records (5 min).
2. Review funnel counts and stage movement (10 min).
3. Review delivery risks, support, and compliance signals (5 min).
4. Review actual revenue separately from forecast (5 min).
5. Assign owner and due date to each next action (5 min).

## 7. Operating rhythm

- Daily: review inbound inquiries, urgent handoffs, delivery failures, and suppression events.
- Weekly: review pipeline, delivery health, KPI scorecard, and highest-risk work.
- Monthly: review package margins using actual vendor invoices and time spent; review customer outcomes and renewals.
- Quarterly: revalidate ICP, pricing, vendor dependencies, privacy/retention, and incident/rollback readiness.

## 8. Approval and change control

Only the CEO/business owner approves public pricing, contractual commitments, partner compensation, production launches, and material scope changes. Technical changes follow code review, tests, staged rollout, monitoring, and rollback. No customer data is used in demos or test environments without an approved data-handling plan.
