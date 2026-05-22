import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '@/constants';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sections = NAV_ITEMS
          .map(item => ({
            name: item.name,
            element: document.querySelector(item.href),
          }))
          .filter(section => section.element);

        const scrollPosition = window.scrollY + 150; // Offset for navbar height

        // Find the section that's currently most visible
        let currentSection = 'home';
        let maxVisible = 0;

        sections.forEach(section => {
          if (section.element) {
            const rect = section.element.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            const elementBottom = elementTop + rect.height;

            // Calculate how much of the section is visible
            const visibleTop = Math.max(elementTop, scrollPosition);
            const visibleBottom = Math.min(
              elementBottom,
              scrollPosition + window.innerHeight
            );
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);

            if (
              visibleHeight > maxVisible &&
              scrollPosition >= elementTop - 100
            ) {
              maxVisible = visibleHeight;
              currentSection = section.name;
            }
          }
        });

        setActiveSection(currentSection);
      }, 10); // Small delay to prevent too frequent updates
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return activeSection;
};
