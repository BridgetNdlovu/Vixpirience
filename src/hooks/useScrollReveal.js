import { useEffect, useRef } from 'react';

export default function useScrollReveal(deps = []) {
  const observerRef = useRef(null);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observerRef.current.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
    }
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        observerRef.current.observe(el);
      });
    }, 50);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return observerRef;
}
