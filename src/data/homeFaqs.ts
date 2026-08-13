export type HomeFaq = {
  question: string;
  answer: string;
};

export const homeFaqs: HomeFaq[] = [
  {
    question: "What does the free AI automation audit cover?",
    answer:
      "We look at the bottlenecks in your lead flow, customer follow-up, and daily operations to identify the quickest opportunities for automation and the best place to start.",
  },
  {
    question: "How quickly can we see results?",
    answer:
      "Many businesses see improvements in response time and lead handling within the first couple of weeks. Larger workflow rollouts typically produce more noticeable gains after the system is fully in place.",
  },
  {
    question: "Will this work with our current tools and CRM?",
    answer:
      "Yes. We design around the systems you already use whenever possible, integrating with your CRM, inboxes, calendars, forms, and internal workflows to reduce friction and manual work.",
  },
  {
    question: "Do you work with small service businesses?",
    answer:
      "Yes. We regularly help local service businesses, contractors, clinics, agencies, and other small businesses improve lead response, follow-up, and scheduling without adding headcount.",
  },
  {
    question: "What is the first automation we should implement?",
    answer:
      "Usually it is the workflow with the clearest financial impact: missed calls and form submissions, lead follow-up, appointment booking, or repetitive admin tasks that drain staff time each week.",
  },
];
