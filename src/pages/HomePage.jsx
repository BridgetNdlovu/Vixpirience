import { useState } from 'react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import FilterChips from '../components/FilterChips';
import ActivityCard from '../components/ActivityCard';
import HowItWorks from '../components/HowItWorks';
import MapSection from '../components/MapSection';
import ReviewCarousel from '../components/ReviewCarousel';
import Operators from '../components/Operators';
import BookingModal from '../components/BookingModal';
import { ACTIVITIES } from '../data/activities';
import useScrollReveal from '../hooks/useScrollReveal';

export default function HomePage({ onSaveBooking }) {
  const [filter, setFilter] = useState('all');
  const [bookingActivity, setBookingActivity] = useState(null);

  useScrollReveal([filter]);

  const filtered = filter === 'all'
    ? ACTIVITIES
    : ACTIVITIES.filter((a) => a.category === filter);

  const handleBook = (id) => {
    const a = ACTIVITIES.find((x) => x.id === id);
    if (a) setBookingActivity(a);
  };

  const scrollToActivities = () => {
    document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero />
      <StatsBar />

      <section className="activities" id="activities">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">The marketplace</p>
          <h2>Every way to experience the Falls, side by side</h2>
          <p className="section-sub">Real prices, real availability, verified reviews — so you can compare before you commit.</p>
        </div>
        <FilterChips active={filter} onChange={setFilter} />
        <div className="activity-grid">
          {filtered.map((a) => (
            <ActivityCard key={a.id} activity={a} onBook={handleBook} />
          ))}
        </div>
      </section>

      <HowItWorks />
      <MapSection />
      <ReviewCarousel />
      <Operators />

      <BookingModal
        activity={bookingActivity}
        onClose={() => setBookingActivity(null)}
        onSave={onSaveBooking}
        scrollToActivities={scrollToActivities}
      />
    </>
  );
}
