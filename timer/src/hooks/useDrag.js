import React, { useState, useEffect, useRef } from 'react';

export default function useDrag(){
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const isDragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  // Manage mousemove/mouseup on window to track drag outside component
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    };
    const handleMouseUp = () => (isDragging.current = false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Initiate drag and calculate initial offset
  const handleMouseDown = (e) => {
    isDragging.current = true;
    offset.current = {
      x: e.clientX - e.target.getBoundingClientRect().left,
      y: e.clientY - e.target.getBoundingClientRect().top,
    };
  };

  return { position, handleMouseDown }

};
