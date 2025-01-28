import React, { useEffect, useState } from 'react';
import './CustomCursor.css'; // Make sure to import the CSS for styling

const CustomCursor = () => {
  const [cursorSize, setCursorSize] = useState(20); // Default cursor size

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    // Mouse move event to update cursor position
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;
      cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
    };

    // Hover over interactive elements (button, links)
    const handleMouseEnter = () => {
      setCursorSize(30); // Increase cursor size on hover
    };

    const handleMouseLeave = () => {
      setCursorSize(20); // Reset cursor size when not hovering
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button').forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button').forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div className="custom-cursor" style={{ width: cursorSize, height: cursorSize }}></div>;
};

export default CustomCursor;
