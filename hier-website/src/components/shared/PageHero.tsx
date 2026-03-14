const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

interface PageHeroProps {
  eyebrow: string
  title: string
  titleAccent?: string
  description: string
  backgroundImage?: string
}

export default function PageHero({ eyebrow, title, titleAccent, description, backgroundImage }: PageHeroProps) {
  return (
    <section
      className="relative pt-44 pb-24 overflow-hidden noise-overlay"
      style={{ background: 'var(--color-forest)' }}
    >
      {/* Optional background photo */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('${BASE}/${backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(28,46,38,0.9) 0%, rgba(28,46,38,0.6) 100%)' }}
          />
        </>
      )}

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,144,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,144,42,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10" style={{ background: 'var(--color-gold)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--color-gold)' }}>
            {eyebrow}
          </span>
        </div>
        <h1
          className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <em className="font-normal" style={{ color: 'var(--color-gold-light)' }}>
                {titleAccent}
              </em>
            </>
          )}
        </h1>
        <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  )
}
