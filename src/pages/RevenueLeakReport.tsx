import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, BarChart3, Check, Clock3, CircleDollarSign, Gauge, ShieldCheck, Sparkles, TrendingUp, Workflow } from "lucide-react";

const tiers = [
  { name: "Starter", price: "$49", description: "Find the first places revenue may be slipping away.", features: ["Business health snapshot", "Top 3 potential revenue leaks", "Prioritized quick wins", "Branded PDF report"], recommended: false },
  { name: "Growth", price: "$149", description: "A deeper diagnostic with a practical improvement roadmap.", features: ["Comprehensive leak assessment", "Revenue opportunity scenarios", "Lead and sales funnel analysis", "AI and automation roadmap", "Branded dashboard + PDF"], recommended: true },
  { name: "Premium", price: "$399", description: "A detailed assessment with a scoped human review.", features: ["Everything in Growth", "Expanded implementation roadmap", "Cost-benefit scenarios", "One scheduled review session", "Recommendations walkthrough"], recommended: false },
];

const steps = [
  { title: "Business profile", detail: "The context behind your numbers." },
  { title: "Revenue & sales", detail: "How opportunities move to revenue." },
  { title: "Lead capture", detail: "Where prospects may fall through." },
  { title: "Operations", detail: "Systems, time, and automation." },
];

export default function RevenueLeakReport() {
  const [selectedTier, setSelectedTier] = useState("Growth");
  const [activeStep, setActiveStep] = useState(0);
  const [showAssessment, setShowAssessment] = useState(false);

  const start = (tier: string) => {
    setSelectedTier(tier);
    setShowAssessment(true);
    setActiveStep(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Revenue Leak Report Preview | MazinMind Digital</title>
        <meta name="description" content="Preview MazinMind Digital's revenue leak assessment for missed opportunities, sales friction, and manual work." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Revenue Leak Report Preview | MazinMind Digital" />
        <meta property="og:description" content="Preview a practical assessment of missed opportunities, sales friction, and manual work." />
        <meta property="og:url" content="https://mazinmind.digital/revenue-leak-report" />
        <meta property="og:site_name" content="MazinMind Digital" />
        <meta property="og:image" content="https://mazinmind.digital/images/blog/lead-automation-graffiti.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Revenue Leak Report Preview | MazinMind Digital" />
        <meta name="twitter:description" content="Preview a practical assessment of missed opportunities, sales friction, and manual work." />
        <meta name="twitter:image" content="https://mazinmind.digital/images/blog/lead-automation-graffiti.webp" />
      </Helmet>
      <main className="min-h-screen bg-[#071a22] text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <a href="/" className="flex items-center gap-3" aria-label="MazinMind Digital home">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-teal-300/30 bg-teal-400/10 text-teal-200"><Gauge size={22} /></span>
            <span><span className="block text-sm font-bold tracking-wide">MAZINMIND DIGITAL</span><span className="block text-xs text-slate-400">AI • Automation • Growth</span></span>
          </a>
          <a href="#pricing" className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-teal-300/50 hover:text-teal-200">View pricing</a>
        </header>

        {!showAssessment ? (
          <>
            <section className="grid items-center gap-12 py-16 md:grid-cols-[1.05fr_.95fr] md:py-24">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.16em] text-teal-200"><Sparkles size={14} /> Revenue intelligence report</div>
                <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Find the revenue slipping through the cracks.</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Get a visual, practical assessment of missed opportunities, sales friction, and manual work that may be holding your business back. Leave with a prioritized plan, not another dusty spreadsheet.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-emerald-500/15 transition hover:bg-emerald-300">Choose your report <ArrowRight size={18} /></a>
                  <a href="#how-it-works" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-white/30">See how it works</a>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400"><span className="flex items-center gap-2"><ShieldCheck size={16} className="text-teal-300" /> Private by design</span><span className="flex items-center gap-2"><Clock3 size={16} className="text-teal-300" /> Guided assessment</span><span className="flex items-center gap-2"><BarChart3 size={16} className="text-teal-300" /> Clear visual findings</span></div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[.04] p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-7">
                <div className="flex items-start justify-between gap-4"><div><p className="text-sm text-slate-400">Revenue opportunity overview</p><h2 className="mt-1 text-xl font-bold">Your business, under the microscope</h2></div><span className="rounded-xl bg-teal-300/10 p-3 text-teal-200"><TrendingUp size={23} /></span></div>
                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-[#0c2630] p-4"><p className="text-xs text-slate-400">Lead conversion</p><p className="mt-2 text-2xl font-bold">Opportunity</p><p className="mt-1 text-xs text-teal-200">Find friction points</p></div>
                  <div className="rounded-2xl border border-white/10 bg-[#0c2630] p-4"><p className="text-xs text-slate-400">Manual workload</p><p className="mt-2 text-2xl font-bold">Efficiency</p><p className="mt-1 text-xs text-teal-200">Spot repeatable tasks</p></div>
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-[#0c2630] p-4">
                  <div className="flex items-center justify-between"><p className="font-semibold">Assessment coverage</p><span className="text-xs text-slate-400">Illustrative preview</span></div>
                  {["Lead capture & response","Sales conversion","Operations & automation","Retention & billing"].map((label, i) => <div key={label} className="mt-4"><div className="mb-2 flex justify-between text-xs"><span className="text-slate-300">{label}</span><span className="text-slate-500">{["01","02","03","04"][i]}</span></div><div className="h-1.5 rounded-full bg-white/10"><div className="h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-300" style={{ width: [88, 68, 78, 55][i] + "%" }} /></div></div>)}
                </div>
                <p className="mt-4 text-xs leading-5 text-slate-500">Preview only. Your actual findings and financial estimates are generated from your assessment and clearly labeled assumptions.</p>
              </div>
            </section>

            <section id="how-it-works" className="border-t border-white/10 py-14">
              <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.18em] text-teal-200">A clearer path forward</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">From business questions to an actionable plan.</h2><p className="mt-4 leading-7 text-slate-300">Answer guided questions about your business. We analyze your inputs, identify potential friction, and map the findings to practical improvements.</p></div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">{[{n:"01",title:"Tell us how you work",body:"Share your business model, key numbers, lead flow, and systems. Unknown answers are allowed."},{n:"02",title:"See the opportunities",body:"Review evidence-backed findings, estimates, assumptions, and confidence levels."},{n:"03",title:"Choose what to fix",body:"Get a prioritized roadmap and relevant options for AI, automation, and conversion improvements."}].map(item => <article key={item.n} className="rounded-2xl border border-white/10 bg-white/[.035] p-6"><span className="text-sm font-bold text-teal-200">{item.n}</span><h3 className="mt-4 text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p></article>)}</div>
            </section>

            <section id="pricing" className="py-14">
              <div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[.18em] text-teal-200">Simple, transparent pricing</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Start with the insight you need.</h2><p className="mt-4 text-slate-300">Choose a report depth that matches your goals. Prices are proposed launch pricing and will be finalized before checkout goes live.</p></div>
              <div className="mt-9 grid gap-5 lg:grid-cols-3">{tiers.map(tier => <article key={tier.name} className={`relative flex flex-col rounded-3xl border p-6 ${tier.recommended ? "border-emerald-300/60 bg-emerald-300/[.08] shadow-xl shadow-emerald-950/30" : "border-white/10 bg-white/[.035]"}`}>{tier.recommended && <span className="absolute -top-3 left-6 rounded-full bg-emerald-300 px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-950">Recommended</span>}<h3 className="mt-2 text-xl font-bold">{tier.name}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{tier.description}</p><p className="mt-5 text-4xl font-black">{tier.price}<span className="ml-2 text-sm font-medium text-slate-400">one-time</span></p><ul className="my-6 flex-1 space-y-3">{tier.features.map(feature => <li key={feature} className="flex gap-3 text-sm text-slate-300"><Check size={17} className="mt-0.5 shrink-0 text-emerald-300" />{feature}</li>)}</ul><button onClick={() => start(tier.name)} className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold transition ${tier.recommended ? "bg-emerald-300 text-slate-950 hover:bg-emerald-200" : "border border-white/15 text-white hover:border-teal-200/50 hover:text-teal-100"}`}>Select {tier.name} <ArrowRight size={17} /></button></article>)}</div>
            </section>
            <section className="mb-8 rounded-3xl border border-teal-200/15 bg-gradient-to-r from-teal-300/10 to-emerald-300/5 p-7 sm:p-10"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><h2 className="text-2xl font-bold">Better decisions start with better visibility.</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">Find the bottlenecks, understand the assumptions, and focus your next move on the changes most likely to matter.</p></div><a href="#pricing" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-slate-200">Explore reports <ArrowRight size={17} /></a></div></section>
          </>
        ) : (
          <section className="mx-auto max-w-3xl py-12">
            <button onClick={() => setShowAssessment(false)} className="mb-6 text-sm text-teal-200 hover:text-teal-100">← Back to report options</button>
            <div className="rounded-3xl border border-white/10 bg-white/[.04] p-6 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-[.16em] text-teal-200">Assessment preview</p><h1 className="mt-2 text-3xl font-bold">Let's understand your business.</h1><p className="mt-2 text-slate-400">Selected package: <strong className="text-white">{selectedTier}</strong> · {tiers.find(t => t.name === selectedTier)?.price}</p></div><span className="rounded-2xl bg-teal-300/10 p-3 text-teal-200"><CircleDollarSign size={25} /></span></div>
              <div className="mt-8 grid grid-cols-4 gap-2">{steps.map((step, index) => <button key={step.title} onClick={() => setActiveStep(index)} className={`rounded-xl px-2 py-3 text-left text-xs sm:px-3 ${activeStep === index ? "bg-teal-300/15 text-teal-100 ring-1 ring-teal-300/40" : "bg-white/5 text-slate-500"}`}><span className="block font-bold">0{index + 1}</span><span className="mt-1 hidden sm:block">{step.title}</span></button>)}</div>
              <div className="mt-8"><h2 className="text-xl font-bold">{steps[activeStep].title}</h2><p className="mt-1 text-sm text-slate-400">{steps[activeStep].detail}</p>
                <div className="mt-6 rounded-2xl border border-amber-200/20 bg-amber-100/[.05] p-4 text-sm leading-6 text-amber-100/90"><strong>Prototype notice:</strong> This assessment flow is being built. Payment, secure storage, report generation, and delivery are not connected yet, so this preview does not submit or retain your information.</div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">{(activeStep === 0 ? [{label:"Company name",placeholder:"Your company",type:"text"},{label:"Website",placeholder:"https://example.com",type:"url"},{label:"Industry",placeholder:"e.g. Home services",type:"text"},{label:"Business model",placeholder:"e.g. Service business",type:"text"},{label:"Your name",placeholder:"Full name",type:"text"},{label:"Business email",placeholder:"you@company.com",type:"email"}] : activeStep === 1 ? [{label:"Annual revenue (approx.)",placeholder:"e.g. 600000 or a range",type:"text"},{label:"Average sale or contract value",placeholder:"e.g. 500",type:"text"},{label:"Qualified leads per month",placeholder:"e.g. 100 or not sure",type:"text"},{label:"Lead-to-customer conversion",placeholder:"e.g. 10% or not sure",type:"text"}] : activeStep === 2 ? [{label:"How quickly are new leads answered?",placeholder:"e.g. Within an hour",type:"text"},{label:"Monthly missed calls or inquiries",placeholder:"e.g. 15 or not sure",type:"text"},{label:"Do you use a CRM?",placeholder:"e.g. Zoho, HubSpot, none",type:"text"},{label:"Is follow-up automated?",placeholder:"e.g. Yes, partly, no",type:"text"}] : [{label:"Main business systems",placeholder:"Accounting, scheduling, support…",type:"text"},{label:"Hours spent on repetitive work weekly",placeholder:"e.g. 10 or not sure",type:"text"},{label:"Budget for improvements",placeholder:"Choose a range or not sure",type:"text"},{label:"Top business goal",placeholder:"Growth, profit, efficiency…",type:"text"}]).map(field => <label key={field.label} className="block text-sm font-medium text-slate-200">{field.label}<input type={field.type} placeholder={field.placeholder} disabled className="mt-2 w-full rounded-xl border border-white/10 bg-[#071a22] px-4 py-3 text-slate-300 placeholder:text-slate-600 disabled:cursor-not-allowed" /></label>)}</div>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6"><button onClick={() => setActiveStep(Math.max(0, activeStep - 1))} disabled={activeStep === 0} className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold disabled:opacity-30">Previous</button><button onClick={() => activeStep < steps.length - 1 ? setActiveStep(activeStep + 1) : setShowAssessment(false)} className="inline-flex items-center gap-2 rounded-xl bg-emerald-300 px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-emerald-200">{activeStep < steps.length - 1 ? "Continue preview" : "Back to overview"} <ArrowRight size={16} /></button></div>
            </div>
          </section>
        )}
        <footer className="border-t border-white/10 py-7 text-xs leading-5 text-slate-500">© {new Date().getFullYear()} MazinMind Digital. Revenue opportunities are estimates based on supplied information and assumptions, not guarantees of financial results.</footer>
      </div>
      </main>
    </>
  );
}
