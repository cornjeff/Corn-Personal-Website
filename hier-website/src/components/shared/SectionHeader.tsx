interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  subtitle?: string
  dark?: boolean
  centered?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  dark = false,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl mb-14 ${centered ? 'mx-auto text-center' : ''}`}>
      <div className={`divider-gold mb-5 ${centered ? 'mx-auto' : ''}`} />
      {eyebrow && (
        <p
          className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
          style={{ color: 'var(--color-gold)' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-4xl lg:text-5xl font-bold leading-tight mb-4 ${dark ? 'text-white' : ''}`}
        style={{
          fontFamily: 'var(--font-display)',
          color: dark ? undefined : 'var(--color-charcoal)',
        }}
      >
        {title}
        {titleAccent && (
          <>
            <br />
            <em className="font-normal" style={{ color: dark ? 'var(--color-gold-light)' : 'var(--color-gold)' }}>
              {titleAccent}
            </em>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          className="text-lg leading-relaxed"
          style={{ color: dark ? 'rgba(255,255,255,0.6)' : 'var(--color-muted)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
