import { useState, useEffect, useRef } from 'react';
import { ACTIVITIES } from '../data/activities';

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % ACTIVITIES.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const scrollToActivities = () => {
    document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="top">
      <div className="hero-slides" aria-hidden="true">
        {ACTIVITIES.map((a, i) => (
          <div
            key={a.id}
            className={`hero-slide${i === activeIdx ? ' is-active' : ''}`}
            style={{ backgroundImage: `url('${a.heroImg}')` }}
          />
        ))}
      </div>
      <div className="hero-scrim" />
      <div className="hero-mist" aria-hidden="true" />

      <div className="hero-content">
        <p className="eyebrow">Mosi-oa-Tunya · The Smoke That Thunders</p>
        <h1>Victoria Falls,<br />uncomplicated.</h1>
        <p className="hero-sub">
          One place to discover, compare and book every rafting run, flight, jump, cruise and safari at the Falls — priced upfront, confirmed instantly, paid for safely.
        </p>
        <div className="hero-trust">
          <span><strong>8</strong> activity types</span>
          <span className="dot">•</span>
          <span><strong>12+</strong> verified operators</span>
          <span className="dot">•</span>
          <span><strong>Instant</strong> digital tickets</span>
        </div>
      </div>

      <button className="hero-scroll" aria-label="Scroll to activities" onClick={scrollToActivities}>
        <span />
      </button>
    </section>
  );
}
