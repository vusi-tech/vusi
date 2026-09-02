import { SectionHeading } from "@/components/section-heading"
import { LineChart, ShieldCheck, FileSpreadsheet, GraduationCap } from "lucide-react"

const goals = [
  {
    icon: GraduationCap,
    title: "CIA / CISA Certifications",
    body: "Actively pursuing professional audit certifications to deepen credentials.",
  },
  {
    icon: LineChart,
    title: "Data Analytics in Audit",
    body: "Expanding expertise in audit technology and data-driven assurance.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Governance",
    body: "Strengthening knowledge of risk management and corporate governance.",
  },
  {
    icon: FileSpreadsheet,
    title: "Advanced Reporting",
    body: "Building depth in advanced financial reporting and analysis.",
  },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="A quick learner with a foundation in audit & finance" />

        <div className="mt-10 grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Motivated and eager-to-learn Internal Auditing graduate with a Diploma from Vaal University of
              Technology, seeking internship opportunities to develop professional expertise in audit, finance, and
              compliance.
            </p>
            <p>
              I&apos;ve demonstrated a quick learning ability through hands-on experience with{" "}
              <span className="font-medium text-foreground">QuickBooks Online</span>,{" "}
              <span className="font-medium text-foreground">SAGE</span>, and financial administration — turning
              academic foundations into practical, real-world capability.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-secondary p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--slate)]">
              Professional Development Goals
            </h3>
            <ul className="mt-5 space-y-4">
              {goals.map((g) => (
                <li key={g.title} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    <g.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{g.title}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{g.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
