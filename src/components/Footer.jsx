import { Link, useNavigate } from 'react-router-dom';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const navigate = useNavigate();

  const handleAnchor = (e, id) => {
    if (id.startsWith('/')) return;
    e.preventDefault();
    navigate('/#' + id);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="brand brand-footer">
            <BrandLogo size={26} />
            VicXperience
          </Link>
          <p>The digital bridge between Victoria Falls tourists and service providers.</p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <a href="#activities" onClick={(e) => handleAnchor(e, 'activities')}>All activities</a>
          <Link to="/gallery">Gallery</Link>
          <a href="#how" onClick={(e) => handleAnchor(e, 'how')}>How booking works</a>
          <a href="#map" onClick={(e) => handleAnchor(e, 'map')}>Meeting points</a>
          <a href="#reviews" onClick={(e) => handleAnchor(e, 'reviews')}>Reviews</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#operators" onClick={(e) => handleAnchor(e, 'operators')}>Partner with us</a>
          <a href="#!">About VicXperience</a>
          <a href="#!">Safety &amp; trust</a>
          <a href="#!">Contact support</a>
        </div>
        <div className="footer-col">
          <h4>Pay with confidence</h4>
          <p className="footer-pay">Card payments &amp; mobile money — instant confirmation, no cash needed.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 VicXperience. Built for the Zambezi.</span>
        <span>Victoria Falls, Zimbabwe · 17.9243° S, 25.8572° E</span>
      </div>
    </footer>
  );
}
