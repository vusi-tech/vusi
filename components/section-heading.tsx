import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string
  title: string
  className?: string
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--slate)] md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
