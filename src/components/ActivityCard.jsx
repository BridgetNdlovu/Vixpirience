import { money, stars } from '../utils/helpers';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ActivityCard({ activity, onBook }) {
  useScrollReveal();
  const a = activity;
  return (
    <article className="activity-card reveal">
      <div className="activity-media">
        <img src={a.img} alt={a.name} loading="lazy" />
        <span className="activity-tag">{a.tag}</span>
        <span className="activity-avail">{a.availability}</span>
      </div>
      <div className="activity-body">
        <h3>{a.name}</h3>
        <p className="activity-desc">{a.desc}</p>
        <div className="activity-meta">
          <span className="activity-rating">
            <span className="stars">{stars(a.rating)}</span> {a.rating}{' '}
            <span className="count">({a.reviews})</span>
          </span>
          <span className="activity-price">
            {money(a.price)}<small> / person</small>
          </span>
        </div>
        <div className="activity-footer">
          <span className="activity-duration">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
            {a.duration}
          </span>
          <button className="btn btn-primary" type="button" onClick={() => onBook(a.id)}>
            Book now
          </button>
        </div>
      </div>
    </article>
  );
}
