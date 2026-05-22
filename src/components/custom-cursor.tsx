'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Enhanced hover detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for different types of interactive elements
      if (target.tagName === 'A' || target.classList.contains('nav-link')) {
        setIsHovering(true);
        setCursorType('link');
      } else if (
        target.tagName === 'BUTTON' ||
        target.classList.contains('btn-primary')
      ) {
        setIsHovering(true);
        setCursorType('button');
      } else if (
        target.classList.contains('project-card') ||
        target.classList.contains('experience-card') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
        setCursorType('interactive');
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setIsHovering(true);
        setCursorType('text');
      } else {
        setIsHovering(false);
        setCursorType('default');
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setCursorType('default');
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`custom-cursor-dot ${cursorType} ${
          isClicking ? 'clicking' : ''
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : 1})`,
        }}
      />

      {/* Cursor ring */}
      <div
        className={`custom-cursor-ring ${cursorType} ${
          isClicking ? 'clicking' : ''
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`,
        }}
      />

      {/* Cursor trail effect */}
      <div
        className="custom-cursor-trail"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 0.8})`,
        }}
      />
    </>
  );
}
