import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingsDrawer from './components/BookingsDrawer';
import Toast from './components/Toast';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import useBookings from './hooks/useBookings';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/') return;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HandleHashScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname === '/' && hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [pathname, hash]);
  return null;
}

function AppContent() {
  const { bookings, saveBooking } = useBookings();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openBookings = useCallback(() => setDrawerOpen(true), []);
  const closeBookings = useCallback(() => setDrawerOpen(false), []);

  return (
    <>
      <ScrollToTop />
      <HandleHashScroll />
      <Navbar bookingCount={bookings.length} onOpenBookings={openBookings} />
      <Routes>
        <Route path="/" element={<HomePage onSaveBooking={saveBooking} />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
      <BookingsDrawer bookings={bookings} isOpen={drawerOpen} onClose={closeBookings} />
      <Toast />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
