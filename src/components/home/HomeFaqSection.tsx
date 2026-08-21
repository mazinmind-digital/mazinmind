import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homeFaqs } from "@/data/homeFaqs";

export function HomeFaqSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute -left-14 top-12 h-[260px] w-[260px] rounded-full bg-primary/15 blur-[90px]" />
      <div className="absolute -right-10 bottom-8 h-[260px] w-[260px] rounded-full bg-electric/15 blur-[90px]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-4xl font-display font-bold tracking-wider md:text-5xl">
            AI AUTOMATION <span className="text-gradient-primary">FAQ</span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-muted-foreground">
            Straight answers about lead response, automation priorities, and the
            practical systems that help small businesses work more efficiently.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`home-faq-${index}`}
                className="glass-vibrant rounded-xl border border-primary/30 px-6"
              >
                <AccordionTrigger className="py-6 text-left font-semibold tracking-wide text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
