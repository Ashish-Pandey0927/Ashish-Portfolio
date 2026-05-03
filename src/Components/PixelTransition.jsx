import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// This component creates the grid of pixels that animate in and out
const PixelGrid = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // We wait for component to mount to get accurate window sizes
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowSize.width === 0) return null;

  // Calculate how many blocks we need. Let's aim for blocks of roughly 50x50 pixels.
  const blockSize = 50; // Use a fixed size for the blocks
  
  // To avoid tiny fractional blocks, we use Math.ceil and let the grid overflow slightly.
  const columns = Math.ceil(windowSize.width / blockSize);
  const rows = Math.ceil(windowSize.height / blockSize);
  const totalBlocks = columns * rows;

  // Create an array to map over
  const blocks = Array.from({ length: totalBlocks });

  const location = useLocation();

  // Determine the color of the incoming page
  let targetColor = '#111212'; // Default dark theme color
  if (location.pathname === '/services' || location.pathname === '/clients' || location.pathname === '/contact') {
    targetColor = '#efeeec'; // Light theme pages
  } else if (location.pathname === '/' || location.pathname === '/about' || location.pathname === '/works') {
    targetColor = '#111212'; // Dark theme pages
  }

  return (
    <div 
      className="fixed inset-0 z-[9999] pointer-events-none flex flex-wrap"
      style={{ width: `${columns * blockSize}px`, height: `${rows * blockSize}px`, overflow: 'hidden' }}
    >
      {blocks.map((_, i) => {
        // Calculate row and column index
        const colIndex = i % columns;
        const rowIndex = Math.floor(i / columns);
        
        // Stagger from top-left (0,0) to bottom-right
        const staggeredDelay = (colIndex + rowIndex) * 0.02;

        return (
          <motion.div
            key={i}
            style={{ width: blockSize, height: blockSize, backgroundColor: targetColor }}
            initial={{ scale: 1, opacity: 1 }}
            animate={{ 
              scale: 0, 
              opacity: 0,
              transition: { duration: 0.3, delay: staggeredDelay, ease: [0.22, 1, 0.36, 1] } 
            }}
            exit={{ 
              scale: 1, 
              opacity: 1,
              transition: { duration: 0.3, delay: staggeredDelay, ease: [0.22, 1, 0.36, 1] } 
            }}
          />
        );
      })}
    </div>
  );
};

const PixelTransition = ({ children }) => {
  return (
    <>
      <PixelGrid />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PixelTransition;
