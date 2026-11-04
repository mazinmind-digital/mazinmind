# AI Receptionist Integration Architecture: Phone, SMS, Calendar & CRM

**Prepared:** 2026-11-04  
**Status:** Architecture proposal. This document does not claim any provider integration is deployed or tested.

## 1. Design principles

- Keep all provider credentials and privileged API calls on the server.
- Separate the browser demo from production integrations.
- Use provider adapters behind stable internal interfaces so telephony, SMS, calendar, and CRM vendors can be changed without rewriting business logic.
- Collect the minimum data needed for the requested workflow.
- Keep a human in control of emergencies, pricing, availability exceptions, sensitive conversations, and irreversible actions.
- Make consent, suppression, delivery state, retries, auditability, and deletion first-class data.
- Use synthetic data until customer security, privacy, and vendor reviews are approved.

## 2. Target event flow

1. Channel adapter receives an inbound event (web form, phone call, or approved SMS).
2. API validates provider signature/authentication, tenant routing, rate limits, and event idempotency.
3. Conversation/intake service loads the business configuration and approved knowledge.
4. AI service, when implemented, returns structured intent and proposed next action. It cannot directly perform privileged actions.
5. Policy layer checks allowed actions, consent, business hours, escalation rules, and data access.
6. Workflow service creates a CRM lead/task or calendar request through an adapter.
7. Human handoff occurs for urgent, ambiguous, sensitive, low-confidence, or disallowed requests.
8. Delivery adapter sends only approved messages and records provider status.
9. Audit log records event ID, decision, action, result, timestamps, and redacted diagnostics.
10. Monitoring alerts on failures, latency, retries, and provider outages.

## 3. Phone-call intake and missed-call recovery

**Candidate provider:** Evaluate telephony providers such as Twilio or equivalent after comparing Massachusetts recording/consent requirements, local number availability, call routing, webhook security, pricing, data residency, and support.

**Inbound call flow**
- Verify signed provider webhook and normalize caller/call identifiers.
- Apply business hours, holiday schedule, language, and routing rules.
- Play a clear disclosure where recording/transcription is enabled and obtain any required consent before recording.
- Ask approved intake questions only: service category, location/territory, urgency, brief request, and callback preference.
- Do not diagnose, quote unapproved prices, promise availability, or dispatch emergency services.
- Route urgent or sensitive requests to a human-defined escalation path.
- If AI or telephony is unavailable, transfer to the configured human line or provide a clearly approved fallback message.

**Missed-call recovery**
- Use call status webhooks to detect missed/abandoned calls.
- Check whether the caller is already in CRM and whether contact is permitted.
- Create a callback task with call metadata and owner.
- Send an SMS only when documented channel-appropriate consent exists; otherwise create an internal callback task only.
- Deduplicate by provider call ID and normalized phone/time window.
- Record call outcome and callback completion.

**Required tests:** answered, busy, no-answer, caller hangs up, transfer fails, webhook retries, provider outage, after-hours, holiday, duplicate event, blocked/withheld caller ID, opt-out, and human escalation.

## 4. SMS follow-up and delivery tracking

SMS is not a default fallback for cold prospects. Marketing messages require documented channel-appropriate consent and compliance review. Transactional messages and promotional nurture must remain separate.

**Consent record fields:** contact, normalized phone, consent source, timestamp, disclosure text/version, purpose, channel, scope, capture method, and evidence reference.

**Message lifecycle:** queued → submitted → sent → delivered / failed / undelivered. Keep provider message ID, timestamps, error code, retry count, and final disposition.

**Controls**
- Enforce consent and suppression before every send.
- Handle STOP/HELP and provider-level opt-out callbacks; suppress immediately and synchronize the suppression state.
- Do not retry permanent failures or opt-outs.
- Retry only bounded transient failures with exponential backoff and idempotency keys.
- Rate-limit per tenant and destination.
- Store message content only as long as needed; redact sensitive data from logs.
- Provide a human review path for complaints and ambiguous consent.

**Required tests:** valid/invalid consent, STOP, HELP, duplicate webhook, delayed status, delivery failure, provider timeout, retry exhaustion, invalid number, and suppression synchronization.

## 5. Calendar integration

Start with one calendar provider only after the customer chooses it. Prefer OAuth with least-privilege scopes; never request a user's password.

**Proposed flow**
- OAuth authorization and secure refresh-token storage on the server.
- Read only the calendars and availability required by the approved workflow.
- Present candidate slots from real availability, including time zone and duration.
- Require customer confirmation before creating, changing, or cancelling an appointment.
- Re-check availability immediately before booking to avoid race conditions.
- Use idempotency keys and provider event IDs to prevent duplicate bookings.
- Send a confirmation only after the provider confirms the event.
- If calendar access fails or availability is uncertain, collect a request and route it to a human; do not claim a booking.

**Required tests:** token expiry/revocation, missing scopes, time zones/DST, conflicting booking, concurrent booking, cancelled event, provider outage, duplicate webhook, and human fallback.

## 6. CRM integration

Initial target: Zoho CRM, using a server-side adapter and the Leads/Tasks modules as approved.

**Lead mapping proposal**
- First name, last name, email, phone, company, description.
- Lead source and campaign/service interest.
- Channel and inbound event ID.
- Consent evidence and suppression state, where relevant.
- Lead owner, status, next action, and callback preference.

**Controls**
- Use OAuth and minimum scopes.
- Store tokens in a managed secret store.
- Deduplicate using provider event ID and approved business keys.
- Use bounded retries and a dead-letter/reconciliation path.
- Record API response and CRM record ID without logging secrets or unnecessary personal data.
- Never treat a public form submission as blanket SMS or marketing consent.
- Keep customer data tenant-scoped and apply retention/deletion policy.

## 7. Security, observability, and operations

- Verify all inbound provider webhooks with signatures and replay protection.
- Apply per-tenant authentication, authorization, quotas, and rate limits.
- Encrypt credentials and sensitive fields at rest and in transit.
- Redact phone numbers, email addresses, tokens, and message bodies from standard logs.
- Track request/correlation ID, provider event ID, tenant ID, latency, result, and retry count.
- Alert on signature failures, elevated errors, queue growth, delayed delivery, and calendar/CRM sync failures.
- Document credential rotation, provider outage fallback, incident response, data export/deletion, and rollback.

## 8. Implementation sequence

1. Confirm target customers, data flows, provider costs, and legal/privacy requirements.
2. Build tenant identity and secure backend boundary before real customer data.
3. Implement Zoho lead/task adapter with synthetic records and idempotency.
4. Add calendar availability/read-only discovery, then confirmed booking.
5. Add telephony inbound/missed-call adapter and human fallback.
6. Add consent-aware SMS delivery and opt-out webhooks.
7. Run integration tests and customer acceptance before production.
8. Enable one customer at a time with monitoring, usage caps, rollback, and written approval.

## 9. Current limitations

The current receptionist demo is a browser simulation. It does not provide production phone handling, live SMS, calendar booking, or production CRM handoff. Each capability remains an implementation task with provider selection, customer configuration, security review, integration tests, and explicit launch approval.
