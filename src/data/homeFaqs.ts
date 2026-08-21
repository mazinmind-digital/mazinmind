export type HomeFaq = {
  question: string;
  answer: string;
};

export const homeFaqs: HomeFaq[] = [
  {
    question: "How does MazinMind handle missed calls?",
    answer:
      "When a customer calls and nobody answers, our system automatically responds with an SMS or voice message, captures their information, qualifies the lead, and either books an appointment or alerts your team immediately. You get a summary of every missed opportunity.",
  },
  {
    question: "Do I need to replace my current software?",
    answer:
      "No. We build automation around the tools you already use. Integration with your existing CRM, phone system, calendar, forms, and communication tools is part of the approach.",
  },
  {
    question: "Can we start with one small automation?",
    answer:
      "Yes. That's exactly the approach we recommend. Start with missed-call recovery, prove the value, and then expand to follow-up, appointment scheduling, or other workflows.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "After the Revenue Leak Audit, we typically start building within 1-2 weeks. Most missed-call systems are operational within 2-4 weeks depending on your existing phone and CRM setup.",
  },
  {
    question: "What's included in the Revenue Leak Audit?",
    answer:
      "We review where leads and customers are being lost across missed calls, slow response times, manual follow-up, and disconnected workflows. You'll get a detailed analysis, automation opportunities, recommended technology approach, and a prioritized implementation roadmap.",
  },
];

