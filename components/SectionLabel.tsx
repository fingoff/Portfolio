export default function SectionLabel({ children, index }: Readonly<{ children: React.ReactNode; index?: string }>) {
  return (
    <div className="flex items-center gap-4 mb-2 sticky top-0 z-20 -mx-5 px-5 py-5 bg-bg/75 backdrop-blur-md">
      {index && (
        <span className="font-mono text-xs text-accent select-none">{index}</span>
      )}
      <span className="font-mono text-xs text-heading uppercase tracking-[0.2em]">
        {children}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}
