const stats = [
  { value: '50+', label: 'Years of Experience' },
  { value: '1974', label: 'Year Founded' },
  { value: '40+', label: 'Years in Douglas County' },
  { value: '4', label: 'Full-Service Disciplines' },
]

export default function StatsBar() {
  return (
    <section style={{ background: 'var(--color-charcoal)' }} className="py-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center py-10 px-6 text-center">
              <span
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-gold)' }}
              >
                {stat.value}
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
