export default function SectionLabel({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex items-center gap-6">
      <span className="font-mono text-xs text-muted uppercase tracking-[0.2em]">
        {children}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}
