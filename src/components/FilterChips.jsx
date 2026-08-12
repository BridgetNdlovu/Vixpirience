const FILTERS = [
  { key: 'all', label: 'All activities' },
  { key: 'rafting', label: 'Rafting' },
  { key: 'helicopter', label: 'Helicopter' },
  { key: 'bungee', label: 'Bungee' },
  { key: 'cruise', label: 'Sunset cruise' },
  { key: 'safari', label: 'Safari' },
  { key: 'cultural', label: 'Cultural' },
  { key: 'food', label: 'Food' },
  { key: 'stay', label: 'Stay' }
];

export default function FilterChips({ active, onChange }) {
  return (
    <div className="filters" role="tablist" aria-label="Filter activities">
      {FILTERS.map((f) => (
        <button
          key={f.key}
          className={`filter-chip${active === f.key ? ' is-active' : ''}`}
          data-filter={f.key}
          role="tab"
          aria-selected={active === f.key}
          onClick={() => onChange(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
