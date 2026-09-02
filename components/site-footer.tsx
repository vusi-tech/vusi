export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row">
        <span className="font-serif font-semibold text-[var(--slate)]">VUSI SIMELANE</span>
        <span>© {new Date().getFullYear()} Vusi Thabo Simelane. All rights reserved.</span>
      </div>
    </footer>
  )
}
