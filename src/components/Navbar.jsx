import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BrandLogo from './BrandLogo';

export default function Navbar({ bookingCount, onOpenBookings }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = useCallback(
    (e, target) => {
      e.preventDefault();
      setMenuOpen(false);
      if (isHome) {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/#' + target);
      }
    },
    [isHome, navigate]
  );

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <BrandLogo />
          VicXperience
        </Link>

        <nav className={`nav-links${menuOpen ? ' nav-links--open' : ''}`} id="navLinks">
          <a href="#activities" onClick={(e) => handleNavClick(e, 'activities')}>Activities</a>
          <Link to="/gallery">Gallery</Link>
          <a href="#how" onClick={(e) => handleNavClick(e, 'how')}>How it works</a>
          <a href="#map" onClick={(e) => handleNavClick(e, 'map')}>Map</a>
          <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')}>Reviews</a>
          <a href="#operators" onClick={(e) => handleNavClick(e, 'operators')}>For operators</a>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-ghost" type="button" onClick={onOpenBookings}>
            My bookings
            {bookingCount > 0 && <span className="badge">{bookingCount}</span>}
          </button>
          <a href="#activities" className="btn btn-primary" onClick={(e) => handleNavClick(e, 'activities')}>
            Book now
          </a>
          <button
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
