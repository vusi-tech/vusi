import { SectionHeading } from "@/components/section-heading"

const roles = [
  {
    role: "Finance Assistant (Remote, Part-Time)",
    org: "Mnotho Value Consultants",
    period: "Jan 2025 – Present",
    current: true,
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
    current: false,
    points: [
      "Performed simulated audit procedures under IIA Standards.",
      "Developed Risk Control Matrices (RCMs) and drafted detailed audit testing procedures.",
      "Compiled formal audit findings — condition, criteria, cause, effect, and recommendations.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Experience" title="Hands-on across finance and audit" />

        <div className="mt-12 space-y-6 border-l border-border pl-6 md:pl-8">
          {roles.map((r) => (
            <div key={r.role} className="relative">
              <span
                className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-secondary md:-left-[calc(2rem+5px)]"
                style={{ backgroundColor: r.current ? "var(--primary)" : "var(--border)" }}
                aria-hidden="true"
              />
              <article className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_rgba(37,99,235,0.25)] md:p-7">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--slate)]">{r.role}</h3>
                    <p className="text-sm font-medium text-primary">{r.org}</p>
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {r.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
