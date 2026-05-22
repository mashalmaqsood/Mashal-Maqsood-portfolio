// Scroll utility functions

export const scrollToSection = (href: string): void => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const isElementInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const getScrollProgress = (): number => {
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const currentProgress = (window.scrollY / documentHeight) * 100;
  return Math.min(100, Math.max(0, currentProgress));
};
