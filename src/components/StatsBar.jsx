import { useEffect, useRef } from 'react';

const STATS = [
  { count: 8, label: 'Activity categories', decimals: 0 },
  { count: 12, label: 'Verified operators', decimals: 0 },
  { count: 4.8, label: 'Average rating', decimals: 1 },
  { count: 100, label: '% digital, no queues', decimals: 0 }
];

function StatCounter({ target, decimals }) {
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || counted.current) return;
          counted.current = true;
          let cur = 0;
          const step = target / 40;
          const tick = () => {
            cur += step;
            if (cur >= target) {
              el.textContent = target.toFixed(decimals);
              return;
            }
            el.textContent = cur.toFixed(decimals);
            requestAnimationFrame(tick);
          };
          tick();
          obs.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, decimals]);

  return <span className="stat-num" ref={ref}>0</span>;
}

export default function StatsBar() {
  return (
    <section className="stats" aria-label="VicXperience at a glance">
      <div className="stats-inner">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <StatCounter target={s.count} decimals={s.decimals} />
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
