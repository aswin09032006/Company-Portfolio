import React, { useEffect, useState, useRef } from "react";
import "./cursor.css";

const CustomCursorTrail = () => {
  const trailRef = useRef([]);
  const [trailElements, setTrailElements] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setTrailElements((prev) => [...prev, newTrail].slice(-20));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log("Trail elements:", trailElements); // Log trail elements array
  }, [trailElements]);

  return (
    <>
      {trailElements.map((trail, index) => (
        <div
          key={trail.id}
          ref={(el) => (trailRef.current[index] = el)}
          className="trail-element"
          style={{ left: `${trail.x}px`, top: `${trail.y}px` }}
        />
      ))}
    </>
  );
};

export default CustomCursorTrail;
