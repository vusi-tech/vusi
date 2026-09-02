"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

const skills = [
  { name: "QuickBooks Online", blurb: "Transaction processing, invoicing, and monthly close." },
  { name: "SAGE", blurb: "Accounting software for bookkeeping and reporting." },
  { name: "Advanced Excel", blurb: "Reconciliations and analysis with 100% accuracy." },
  { name: "Risk & Compliance", blurb: "Risk Control Matrices and IIA-aligned procedures." },
  { name: "Financial Reporting", blurb: "Monthly statements and management reports." },
  { name: "General Ledger", blurb: "Ledger entries and account maintenance." },
  { name: "Audit Testing", blurb: "Simulated audit procedures and formal findings." },
  { name: "Artificial Intelligence", blurb: "Applying AI tools to streamline finance and audit workflows." },
  { name: "Prompt Engineering", blurb: "Crafting effective prompts to get accurate, useful AI output." },
  { name: "AI/ML", blurb: "Understanding machine learning concepts and their applications." },
  { name: "Model Training", blurb: "Preparing data and refining models for better performance." },
]

export function Skills() {
  const [active, setActive] = useState<string | null>(null)
  const current = skills.find((s) => s.name === active)

  return (
    <section id="skills" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & competencies"
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Tap or hover a tag to see how it&apos;s applied.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((s) => (
            <button
              key={s.name}
              type="button"
              onMouseEnter={() => setActive(s.name)}
              onFocus={() => setActive(s.name)}
              onClick={() => setActive((a) => (a === s.name ? null : s.name))}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition-all",
                active === s.name
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_6px_20px_-8px_rgba(37,99,235,0.6)]"
                  : "border-border bg-card text-foreground hover:border-primary/50 hover:text-primary",
              )}
              aria-pressed={active === s.name}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div
          className="mt-8 min-h-[3.5rem] rounded-xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground transition-colors"
          aria-live="polite"
        >
          {current ? (
            <p>
              <span className="font-semibold text-[var(--slate)]">{current.name}:</span> {current.blurb}
            </p>
          ) : (
            <p className="text-muted-foreground/70">Select a skill above to learn more.</p>
          )}
        </div>
      </div>
    </section>
  )
}
