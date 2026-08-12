import { money } from '../utils/helpers';

export default function BookingsDrawer({ bookings, isOpen, onClose }) {
  return (
    <div className={`drawer-backdrop${isOpen ? ' is-open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <aside className="drawer" role="dialog" aria-label="My bookings">
        <div className="drawer-head">
          <h3>My bookings</h3>
          <button className="modal-close" aria-label="Close" onClick={onClose}>×</button>
        </div>
        <div className="drawer-body">
          {bookings.length === 0 ? (
            <div className="drawer-empty">
              No bookings yet.<br />Book an activity and your digital ticket will appear here.
            </div>
          ) : (
            bookings.map((b, i) => (
              <div className="mini-ticket" key={i}>
                <h5>{b.activity}</h5>
                <p>{b.date} · {b.time} · {b.guests} guest{b.guests > 1 ? 's' : ''}</p>
                <p>{money(b.total)} · {b.payMethod === 'card' ? 'Card' : 'Mobile money'}</p>
                <span className="mt-ref">REF {b.ref}</span>
              </div>
            ))
          )}
        </div>
      </aside>
    </div>
  );
}
