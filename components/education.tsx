import { SectionHeading } from "@/components/section-heading"
import { GraduationCap, BadgeCheck, Clock } from "lucide-react"

const items = [
  {
    icon: GraduationCap,
    title: "Diploma in Internal Auditing",
    subtitle: "Vaal University of Technology",
    detail: "Foundation in audit theory, IIA Standards, risk, and compliance.",
    status: "Completed",
    tone: "primary" as const,
  },
  {
    icon: BadgeCheck,
    title: "Certifications",
    subtitle: "Accounting Software",
    detail: "SAGE Certification and QuickBooks Certification.",
    status: "Certified",
    tone: "primary" as const,
  },
  {
    icon: Clock,
    title: "CIA / CISA",
    subtitle: "Professional Audit Credentials",
    detail: "Working toward globally recognized internal audit certifications.",
    status: "In Progress",
    tone: "muted" as const,
  },
]

export function Education() {
  return (
    <section id="education" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education" title="Education & Certifications" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_-16px_rgba(37,99,235,0.3)]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <it.icon className="h-6 w-6" />
                </span>
                <span
                  className={
                    it.tone === "primary"
                      ? "rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary"
                      : "rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  }
                >
                  {it.status}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[var(--slate)]">{it.title}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{it.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
