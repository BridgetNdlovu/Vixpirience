import { useState, useEffect, useCallback, useRef } from 'react';
import { REVIEWS } from '../data/reviews';
import { stars } from '../utils/helpers';

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
    setIndex((i + REVIEWS.length) % REVIEWS.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(index + 1), 6000);
    return () => clearInterval(timerRef.current);
  }, [index, goTo]);

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => { timerRef.current = setInterval(() => goTo(index + 1), 6000); };

  return (
    <section className="reviews" id="reviews">
      <div className="section-head light">
        <p className="eyebrow">Verified travellers</p>
        <h2>What visitors are saying</h2>
      </div>

      <div className="review-carousel" onMouseEnter={pause} onMouseLeave={resume}>
        <button className="rev-nav rev-prev" aria-label="Previous review" onClick={prev}>‹</button>
        <div className="review-track-wrap">
          <ul className="review-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {REVIEWS.map((r, i) => (
              <li className="review-card" key={i}>
                <div>
                  <div className="review-stars">{stars(r.rating)}</div>
                  <blockquote>&ldquo;{r.text}&rdquo;</blockquote>
                  <div className="review-meta">
                    <span className="review-avatar">{r.name.charAt(0)}</span>
                    <div>
                      <div className="review-name">{r.name}</div>
                      <div className="review-sub">{r.origin}</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button className="rev-nav rev-next" aria-label="Next review" onClick={next}>›</button>
      </div>
      <div className="review-dots">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'is-active' : ''}
            onClick={() => goTo(i)}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
