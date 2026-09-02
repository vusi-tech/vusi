import { SectionHeading } from "@/components/section-heading"
import { Mail, Phone, MapPin, Link2, ArrowUpRight } from "lucide-react"

// TODO: Replace these placeholder values with Vusi's real contact details.
const contact = {
  email: "your.email@example.com",
  phone: "+27 00 000 0000",
  location: "Summerfields Estate, Centurion",
  linkedin: "linkedin.com/in/your-profile",
}

const items = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: contact.location, href: null },
  { icon: Link2, label: "LinkedIn", value: contact.linkedin, href: `https://${contact.linkedin}` },
]

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--slate)] py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Contact</span>
        <h2 className="mt-3 max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Let&apos;s discuss internship opportunities
        </h2>
        <p className="mt-4 max-w-xl text-pretty leading-relaxed text-white/60">
          I&apos;m actively seeking opportunities in audit, finance, and compliance. Reach out and I&apos;ll get back
          to you promptly.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map((it) => {
            const inner = (
              <>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                  <it.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/40">{it.label}</p>
                  <p className="truncate text-sm font-medium text-white">{it.value}</p>
                </div>
                {it.href && <ArrowUpRight className="ml-auto h-4 w-4 text-white/40" />}
              </>
            )
            const classes =
              "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors"
            return it.href ? (
              <a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`${classes} hover:border-primary/50 hover:bg-white/10`}
              >
                {inner}
              </a>
            ) : (
              <div key={it.label} className={classes}>
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
