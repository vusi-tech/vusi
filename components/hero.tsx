import Image from "next/image"
import { MapPin, ArrowRight, Briefcase } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--slate)] pt-16 text-white"
    >
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blue-200">
            Open to internship opportunities
          </span>

          <h1 className="mt-6 text-balance font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Vusi Thabo Simelane
          </h1>

          <p className="mt-5 text-pretty text-lg font-medium text-blue-100 md:text-xl">
            Internal Auditing Graduate{" "}
            <span className="text-blue-400">|</span> Finance Professional
          </p>

          <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/60">
            <MapPin className="h-4 w-4 text-blue-400" />
            Summerfields Estate, Centurion
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Briefcase className="h-4 w-4" />
              View Experience
            </a>
          </div>
        </div>

        <div className="mx-auto md:mx-0">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-3xl bg-primary/20 blur-2xl"
            />
            <div className="relative aspect-square w-64 overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:w-72">
              <Image
                src="/images/vusi-portrait.png"
                alt="Portrait of Vusi Thabo Simelane"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 16rem, 18rem"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
