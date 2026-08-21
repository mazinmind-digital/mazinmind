# Security Policy

MazinMind Digital operates the public website [mazinmind.digital](https://mazinmind.digital). We take the security and privacy of site visitors, customers, and business contacts seriously.

## Reporting a vulnerability

Please report suspected security vulnerabilities privately by emailing [rmazin@mazinmind.digital](mailto:rmazin@mazinmind.digital).

Please do not report security vulnerabilities through public GitHub issues, social media, website comments, or other public channels. We will acknowledge a report within 5 business days and will provide updates as we investigate.

When reporting, include enough information for us to reproduce and assess the issue:

- The affected URL, page, endpoint, or repository component
- A description of the vulnerability and its potential impact
- Reproduction steps or a minimal proof of concept
- Relevant request and response details, screenshots, or logs with sensitive data removed
- Your name and preferred contact information, if you would like acknowledgment

Please avoid sending passwords, API keys, personal data, customer information, or other secrets. Redact sensitive information before submitting a report.

## Scope

The primary production target is:

- [https://mazinmind.digital](https://mazinmind.digital)

Reports about this repository's source code, build process, deployment configuration, or public assets are also welcome when they could affect the security of the production website or its visitors.

Third-party services used by the site, including GitHub Pages, Google Analytics, Google Tag Manager, HubSpot, scheduling providers, and external content delivery services, are operated by their respective owners. Please report vulnerabilities in those services to the relevant provider as well, and include any relevant context in your report to us.

## Rules for testing

Only test against your own accounts, data, and systems. Do not:

- access, modify, delete, or exfiltrate another person's data
- disrupt availability or degrade the website or its services
- perform denial-of-service, stress, or load testing
- use social engineering, phishing, spam, or physical attacks
- upload malware or persist beyond what is necessary to demonstrate the issue
- access production secrets or attempt to move laterally into third-party systems
- submit automated traffic that could affect normal visitors or service providers

Stop testing as soon as you have enough evidence to demonstrate the vulnerability.

## Our response process

After receiving a report, we will:

1. Acknowledge receipt within 5 business days.
2. Review the report and attempt to reproduce the issue.
3. Classify its impact and determine an appropriate remediation plan.
4. Communicate material status updates when practical.
5. Release a fix or mitigation when appropriate.
6. Credit the reporter if requested and if disclosure is safe and permitted.

Response times may depend on severity, reproducibility, affected third-party services, and the availability of a safe fix.

## Coordinated disclosure

Please allow us reasonable time to investigate and remediate a confirmed issue before making details public. We will work with the reporter on a coordinated disclosure timeline when disclosure is appropriate.

We do not currently offer a bug bounty or financial reward. Reports are evaluated based on their security impact and the quality of the information provided.

## Safe harbor

We will not pursue legal action against a researcher who makes a good-faith effort to follow this policy, avoids privacy violations and service disruption, and reports findings privately. This safe-harbor statement applies only to activities within the scope and rules described above and does not authorize testing of third-party services.

Thank you for helping keep MazinMind Digital and its visitors safe.
