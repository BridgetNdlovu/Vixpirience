import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY } from '../data/gallery';
import { stars } from '../utils/helpers';
import { showToast } from '../components/Toast';
import useScrollReveal from '../hooks/useScrollReveal';

const G_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'landscape', label: 'The Falls' },
  { key: 'adventure', label: 'Adventure' },
  { key: 'wildlife', label: 'Wildlife' },
  { key: 'water', label: 'Water Activities' },
  { key: 'cultural', label: 'Cultural' },
  { key: 'scenic', label: 'Scenic' },
  { key: 'food', label: 'Food 🍽️' },
  { key: 'stay', label: 'Stay 🏨' }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const [multiLb, setMultiLb] = useState(null);
  const [multiIdx, setMultiIdx] = useState(0);
  const [liked, setLiked] = useState({});

  useScrollReveal([filter]);

  const filtered = filter === 'all' ? GALLERY : GALLERY.filter((g) => g.category === filter);

  const toggleLike = (e, title) => {
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const openMulti = (g) => {
    setMultiLb(g);
    setMultiIdx(0);
  };

  const closeMulti = useCallback(() => {
    setMultiLb(null);
    setMultiIdx(0);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  const updateMultiIdx = useCallback((dir) => {
    setMultiIdx((prev) => {
      if (!multiLb) return 0;
      let next = prev + dir;
      if (next < 0) next = multiLb.images.length - 1;
      if (next >= multiLb.images.length) next = 0;
      return next;
    });
  }, [multiLb]);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox]);

  useEffect(() => {
    if (!multiLb) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeMulti();
      if (e.key === 'ArrowLeft') updateMultiIdx(-1);
      if (e.key === 'ArrowRight') updateMultiIdx(1);
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [multiLb, closeMulti, updateMultiIdx]);

  const handleBookRedirect = (title) => {
    closeMulti();
    showToast('Redirecting to book: ' + title);
    setTimeout(() => {
      window.location.href = '/#activities';
    }, 800);
  };

  return (
    <>
      <section className="gal-hero">
        <div className="gal-hero-bg" aria-hidden="true" />
        <div className="gal-hero-scrim" />
        <div className="gal-hero-content">
          <p className="eyebrow">Visual Journey</p>
          <h1>Explore Victoria Falls</h1>
          <p>From the thundering spray of the Falls to sunrise safaris on the Zambezi — every frame tells a story. Browse, discover, then book the experience that catches your eye.</p>
        </div>
      </section>

      <div className="gal-filters" role="tablist" aria-label="Filter gallery">
        {G_FILTERS.map((f) => (
          <button
            key={f.key}
            className={`gal-chip${filter === f.key ? ' is-active' : ''}`}
            role="tab"
            aria-selected={filter === f.key}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <section className="gal-section">
        <div className="gal-grid">
          {filtered.map((g, i) => (
            <div
              className="vt-card reveal"
              key={g.title}
              style={{ transitionDelay: `${(i % 12) * 0.08}s` }}
              onClick={() => setLightbox(g)}
            >
              <div className="vt-card-bg">
                <img src={g.images[0]} alt={g.title} loading="lazy" />
              </div>
              <div className="vt-card-overlay" />
              <span className="vt-card-category">{g.category}</span>
              <button
                className={`vt-card-heart${liked[g.title] ? ' liked' : ''}`}
                aria-label="Add to favourites"
                type="button"
                onClick={(e) => toggleLike(e, g.title)}
              >
                {liked[g.title] ? '♥' : '♡'}
              </button>
              <div className="vt-card-content">
                <h3 className="vt-card-title">{g.title}</h3>
                <p className="vt-card-desc">{g.description}</p>
                <div className="vt-card-meta">
                  <span className="vt-card-location">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {g.location}
                  </span>
                  <div className="vt-card-details">
                    <span className="vt-card-price">From {g.price} per person</span>
                    <span className="vt-card-duration">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
                      {g.duration}
                    </span>
                  </div>
                  <div className="vt-card-rating">
                    <span className="vt-card-stars">{stars(g.rating)}</span>
                    <span className="vt-card-rating-val">{g.rating}</span>
                  </div>
                </div>
                <button className="vt-card-btn" type="button" onClick={(e) => { e.stopPropagation(); openMulti(g); }}>
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="gal-viewmore-wrap">
          <p className="gal-count">Showing {filtered.length} of {GALLERY.length} experiences</p>
        </div>
      </section>

      {lightbox && (
        <div className={`gal-lightbox${lightbox ? ' is-open' : ''}`} role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}>
          <div className="gal-lb-inner">
            <div className="gal-lb-img">
              <img src={lightbox.images[0]} alt={lightbox.title} />
              <button className="gal-lb-close" aria-label="Close" onClick={() => setLightbox(null)}>×</button>
            </div>
            <div className="gal-lb-content">
              <span className="gal-lb-badge">{lightbox.category}</span>
              <h2>{lightbox.title}</h2>
              <div className="gal-lb-location">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                {lightbox.location}
              </div>
              <p className="gal-lb-desc">{lightbox.description}</p>
              <div className="gal-lb-details">
                <div className="gal-lb-detail"><div className="gal-lb-detail-label">Duration</div><div className="gal-lb-detail-value">{lightbox.duration}</div></div>
                <div className="gal-lb-detail"><div className="gal-lb-detail-label">Price</div><div className="gal-lb-detail-value">{lightbox.price}/person</div></div>
                <div className="gal-lb-detail"><div className="gal-lb-detail-label">Category</div><div className="gal-lb-detail-value">{lightbox.category}</div></div>
                <div className="gal-lb-detail"><div className="gal-lb-detail-label">Location</div><div className="gal-lb-detail-value">{lightbox.location}</div></div>
              </div>
              <div className="gal-lb-rating">
                <span className="gal-lb-stars">{stars(lightbox.rating)}</span>
                <span className="gal-lb-rating-text"><strong>{lightbox.rating}</strong> rating</span>
              </div>
              <div className="gal-lb-actions">
                <button className="btn btn-outline" onClick={() => setLightbox(null)}>Close</button>
                <button className="btn btn-primary" onClick={() => { setLightbox(null); showToast('Redirecting to book: ' + lightbox.title); setTimeout(() => { window.location.href = '/#activities'; }, 800); }}>Book now</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {multiLb && (
        <div className="gal-lightbox is-open" role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) closeMulti(); }}>
          <div className="multi-lb-inner is-visible">
            <div className="multi-lb-images">
              <img className="multi-lb-main-img" src={multiLb.images[multiIdx]} alt={multiLb.title} />
              <button className="multi-lb-nav multi-lb-prev" aria-label="Previous image" onClick={() => updateMultiIdx(-1)}>‹</button>
              <button className="multi-lb-nav multi-lb-next" aria-label="Next image" onClick={() => updateMultiIdx(1)}>›</button>
              <div className="multi-lb-thumbnails">
                {multiLb.images.map((img, i) => (
                  <div
                    key={i}
                    className={`multi-lb-thumb${i === multiIdx ? ' is-active' : ''}`}
                    onClick={() => setMultiIdx(i)}
                  >
                    <img src={img} alt={`${multiLb.title} ${i + 1}`} />
                  </div>
                ))}
              </div>
              <button className="multi-lb-close" aria-label="Close" onClick={closeMulti}>×</button>
            </div>
            <div className="multi-lb-content">
              <span className="gal-lb-badge">{multiLb.category}</span>
              <h2>{multiLb.title}</h2>
              <div className="gal-lb-location">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                {multiLb.location}
              </div>
              <p className="gal-lb-desc">{multiLb.description}</p>
              <div className="gal-lb-details">
                <div className="gal-lb-detail"><div className="gal-lb-detail-label">Duration</div><div className="gal-lb-detail-value">{multiLb.duration}</div></div>
                <div className="gal-lb-detail"><div className="gal-lb-detail-label">Price</div><div className="gal-lb-detail-value">{multiLb.price}/person</div></div>
                <div className="gal-lb-detail"><div className="gal-lb-detail-label">Category</div><div className="gal-lb-detail-value">{multiLb.category}</div></div>
                <div className="gal-lb-detail"><div className="gal-lb-detail-label">Location</div><div className="gal-lb-detail-value">{multiLb.location}</div></div>
              </div>
              <div className="gal-lb-rating">
                <span className="gal-lb-stars">{stars(multiLb.rating)}</span>
                <span className="gal-lb-rating-text"><strong>{multiLb.rating}</strong> rating</span>
              </div>

              {GALLERY.filter((item) => item.category === multiLb.category && item.title !== multiLb.title).length > 0 && (
                <div className="multi-lb-similar">
                  <h4>Similar activities</h4>
                  <div className="similar-grid">
                    {GALLERY.filter((item) => item.category === multiLb.category && item.title !== multiLb.title).slice(0, 6).map((s) => (
                      <div className="similar-card" key={s.title} onClick={() => { closeMulti(); setTimeout(() => openMulti(s), 350); }}>
                        <img src={s.images[0]} alt={s.title} loading="lazy" />
                        <div className="similar-card-info">
                          <div className="similar-card-title">{s.title}</div>
                          <div className="similar-card-price">From {s.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="gal-lb-actions">
                <button className="btn btn-outline" onClick={closeMulti}>Close</button>
                <button className="btn btn-primary" onClick={() => handleBookRedirect(multiLb.title)}>Book now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
