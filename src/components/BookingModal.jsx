import { useState, useEffect } from 'react';
import { money, genRef, barcodeBars } from '../utils/helpers';

export default function BookingModal({ activity, onClose, onSave, scrollToActivities }) {
  const [step, setStep] = useState('form');
  const [guests, setGuests] = useState(2);
  const [payMethod, setPayMethod] = useState('card');
  const [processingLabel, setProcessingLabel] = useState('');
  const [form, setForm] = useState({ date: '', time: '07:00', name: '', email: '' });
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    if (activity) {
      setStep('form');
      setGuests(2);
      setPayMethod('card');
      setForm({ date: '', time: '07:00', name: '', email: '' });
      setTicket(null);
    }
  }, [activity]);

  if (!activity) return null;

  const total = activity.price * guests;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('processing');
    setProcessingLabel(
      payMethod === 'card' ? 'Confirming your card payment…' : 'Confirming your mobile money payment…'
    );
    setTimeout(() => {
      const booking = {
        ref: genRef(),
        activity: activity.name,
        tag: activity.tag,
        date: form.date || 'Flexible',
        time: form.time,
        guests,
        total,
        meet: activity.meet,
        name: form.name,
        payMethod
      };
      onSave(booking);
      setTicket(booking);
      setStep('ticket');
    }, 1300);
  };

  const seed = ticket ? ticket.ref.split('').reduce((s, c) => s + c.charCodeAt(0), 0) : 0;

  return (
    <div className={`modal-backdrop${activity ? ' is-open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button className="modal-close" aria-label="Close" onClick={onClose}>×</button>

        {step === 'form' && (
          <div className="modal-panel">
            <div className="modal-activity">
              <img src={activity.img} alt={activity.name} />
              <div>
                <h4>{activity.name}</h4>
                <span>{activity.duration} · {activity.meet}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <h3 id="modalTitle">Complete your booking</h3>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="bkDate">Date</label>
                  <input
                    type="date"
                    id="bkDate"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="bkTime">Time slot</label>
                  <select id="bkTime" required value={form.time} onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}>
                    <option value="07:00">07:00 — Morning</option>
                    <option value="10:30">10:30 — Late morning</option>
                    <option value="14:00">14:00 — Afternoon</option>
                    <option value="16:30">16:30 — Sunset</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Guests</label>
                  <div className="stepper">
                    <button type="button" className="step-btn" aria-label="Remove guest" onClick={() => setGuests((g) => Math.max(1, g - 1))}>−</button>
                    <input type="number" value={guests} min="1" max="12" readOnly />
                    <button type="button" className="step-btn" aria-label="Add guest" onClick={() => setGuests((g) => Math.min(12, g + 1))}>+</button>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="bkPayment">Payment method</label>
                  <select id="bkPayment" required value={payMethod} onChange={(e) => setPayMethod(e.target.value)}>
                    <option value="card">Card payment</option>
                    <option value="mobile">Mobile money</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="bkName">Full name</label>
                  <input type="text" id="bkName" placeholder="Jane Traveller" required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="form-field">
                  <label htmlFor="bkEmail">Email</label>
                  <input type="email" id="bkEmail" placeholder="jane@email.com" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
                </div>
              </div>

              <div className="price-summary">
                <div className="price-row">
                  <span>{money(activity.price)} × {guests} guest{guests > 1 ? 's' : ''}</span>
                  <span>{money(total)}</span>
                </div>
                <div className="price-row price-total">
                  <span>Total due</span>
                  <span>{money(total)}</span>
                </div>
              </div>

              <button type="submit" className="btn btn-accent btn-block">Confirm &amp; pay</button>
              <p className="modal-note">Secure checkout · Instant confirmation · Free cancellation up to 24h before</p>
            </form>
          </div>
        )}

        {step === 'processing' && (
          <div className="modal-panel">
            <div className="processing">
              <div className="spinner" aria-hidden="true" />
              <p>{processingLabel}</p>
            </div>
          </div>
        )}

        {step === 'ticket' && ticket && (
          <div className="modal-panel">
            <div className="ticket">
              <div className="ticket-main">
                <div className="ticket-eyebrow">Digital ticket · {ticket.tag}</div>
                <h4>{ticket.activity}</h4>
                <div className="ticket-grid">
                  <div><span className="tl">Date</span><span className="tv">{ticket.date}</span></div>
                  <div><span className="tl">Time</span><span className="tv">{ticket.time}</span></div>
                  <div><span className="tl">Guests</span><span className="tv">{ticket.guests}</span></div>
                  <div><span className="tl">Total paid</span><span className="tv">{money(ticket.total)}</span></div>
                  <div style={{ gridColumn: '1/-1' }}><span className="tl">Meeting point</span><span className="tv">{ticket.meet}</span></div>
                </div>
                <div className="ticket-ref">REF {ticket.ref}</div>
              </div>
              <div className="ticket-stub">
                <span className="ticket-guests">{ticket.activity.toUpperCase()}</span>
                <div className="ticket-barcode">
                  {barcodeBars(seed).map((h, i) => (
                    <span key={i} style={{ height: h + 'px' }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="ticket-actions">
              <button className="btn btn-outline" onClick={onClose}>Done</button>
              <button className="btn btn-primary" onClick={() => { onClose(); scrollToActivities(); }}>Book another activity</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
