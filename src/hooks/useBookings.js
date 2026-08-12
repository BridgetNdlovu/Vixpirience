import { useState, useCallback } from 'react';

const STORAGE_KEY = 'vx_bookings';

function getStoredBookings() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export default function useBookings() {
  const [bookings, setBookings] = useState(getStoredBookings);

  const saveBooking = useCallback((booking) => {
    setBookings((prev) => {
      const next = [booking, ...prev];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { bookings, saveBooking };
}
