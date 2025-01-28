import React, { useEffect, useState } from 'react';
import './NotFoundPage.css'; // Update the CSS filename if necessary

const NotFoundPage = () => {
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 50 });
  const [ballVelocity, setBallVelocity] = useState({ x: 2, y: 2 });
  const [paddlePosition, setPaddlePosition] = useState(45);
  const [score, setScore] = useState(0);

  // Update ball and paddle positions
  useEffect(() => {
    const interval = setInterval(() => {
      // Update ball position based on velocity
      setBallPosition(prevPosition => {
        let newX = prevPosition.x + ballVelocity.x;
        let newY = prevPosition.y + ballVelocity.y;

        // Ball collision with walls
        if (newX >= 100 || newX <= 0) {
          setBallVelocity(prevVelocity => ({ ...prevVelocity, x: -prevVelocity.x }));
        }
        if (newY >= 100 || newY <= 0) {
          setBallVelocity(prevVelocity => ({ ...prevVelocity, y: -prevVelocity.y }));
        }

        return { x: newX, y: newY };
      });

      // Check for collision with paddle
      if (
        ballPosition.y >= 90 && // Ball is near the bottom
        ballPosition.x >= paddlePosition &&
        ballPosition.x <= paddlePosition + 20
      ) {
        setBallVelocity(prevVelocity => ({ ...prevVelocity, y: -prevVelocity.y }));
        setScore(prevScore => prevScore + 1); // Increase score
      }
    }, 10);

    return () => clearInterval(interval); // Clean up on unmount
  }, [ballPosition, ballVelocity, paddlePosition]);

  // Handle paddle movement
  const handlePaddleMove = (e) => {
    const newPaddlePosition = (e.clientX / window.innerWidth) * 100 - 10;
    setPaddlePosition(newPaddlePosition);
  };

  return (
    <div className="notfound-container" onMouseMove={handlePaddleMove}>
      <div className="notfound-message">
        <h1>Oops! Page Not Found</h1>
        <p>Looks like you&apos;re trying to catch a page that doesn&apos;t exist!</p>
      </div>
      
      <div className="game-area">
        <div
          className="ball"
          style={{
            left: `${ballPosition.x}%`,
            top: `${ballPosition.y}%`,
          }}
        ></div>
        <div
          className="paddle"
          style={{
            left: `${paddlePosition}%`,
          }}
        ></div>
        <div className="score">Score: {score}</div>
      </div>
    </div>
  );
};

export default NotFoundPage;
