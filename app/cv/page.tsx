import type { Metadata } from "next"
import { PrintButton } from "@/components/print-button"

export const metadata: Metadata = {
  title: "CV — Vusi Thabo Simelane",
  description: "Curriculum Vitae of Vusi Thabo Simelane, Internal Auditing Graduate and Finance Professional.",
}

const experience = [
  {
    role: "Finance Assistant (Remote, Part-Time)",
    org: "Mnotho Value Consultants",
    period: "Jan 2025 – Present",
    points: [
      "Mastered QuickBooks Online for day-to-day transaction processing.",
      "Reconciled bank statements in Excel with 100% accuracy.",
      "Managed general ledger entries and customer invoicing.",
      "Prepared monthly financial statements and management reports.",
    ],
  },
  {
    role: "Financial & Compliance Auditing Practicals",
    org: "Vaal University of Technology",
    period: "Diploma Programme",
    points: [
      "Performed simulated audit procedures under IIA Standards.",
      "Developed Risk Control Matrices (RCMs) and drafted detailed audit testing procedures.",
      "Compiled formal audit findings — condition, criteria, cause, effect, and recommendations.",
    ],
  },
]

const education = [
  {
    title: "National Diploma: Internal Auditing",
    org: "Vaal University of Technology",
    detail: "Completed",
  },
  { title: "SAGE Certification", org: "Accounting Software", detail: "Certified" },
  { title: "QuickBooks Certification", org: "Accounting Software", detail: "Certified" },
  { title: "Google AI Essentials", org: "Google", detail: "Certified" },
  { title: "CIA / CISA", org: "Professional Certifications", detail: "In Progress" },
]

const skills = [
  "QuickBooks Online",
  "SAGE",
  "Advanced Excel",
  "Risk & Compliance",
  "Financial Reporting",
  "Artificial Intelligence",
  "Prompt Engineering",
  "AI/ML",
  "Model Training",
]

export default function CVPage() {
  return (
    <main className="mx-auto max-w-3xl bg-white px-8 py-12 text-[var(--slate)] print:px-0 print:py-0">
      <div className="mb-8 flex items-center justify-between print:hidden">
        <a href="/" className="text-sm font-medium text-primary hover:underline">
          &larr; Back to portfolio
        </a>
        <PrintButton />
      </div>

      <header className="border-b-2 border-[var(--slate)] pb-6">
        <h1 className="font-serif text-4xl font-semibold tracking-tight">Vusi Thabo Simelane</h1>
        <p className="mt-2 text-lg font-medium text-primary">
          Internal Auditing Graduate &nbsp;|&nbsp; Finance Professional
        </p>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
          <span>thabov49@gmail.com</span>
          <span>073 981 2427</span>
          <span>Summerfields Estate, Centurion</span>
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Profile</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Detail-oriented Internal Auditing graduate with hands-on experience in finance operations, bank
          reconciliation, and compliance auditing. Actively expanding expertise into artificial intelligence and
          machine learning to bring data-driven insight to audit and finance.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Experience</h2>
        <div className="mt-4 space-y-6">
          {experience.map((r) => (
            <div key={r.role} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">{r.role}</h3>
                <span className="text-xs font-medium text-muted-foreground">{r.period}</span>
              </div>
              <p className="text-sm font-medium text-primary">{r.org}</p>
              <ul className="mt-2 space-y-1.5">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Education &amp; Certifications</h2>
        <div className="mt-4 space-y-3">
          {education.map((e) => (
            <div key={e.title} className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.org}</p>
              </div>
              <span className="text-xs font-medium text-primary">{e.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-[var(--slate)]"
            >
              {s}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}
