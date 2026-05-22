import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / documentHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial call

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return scrollProgress;
};
