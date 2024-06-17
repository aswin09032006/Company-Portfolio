import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";
import "./bubble.css";

const Bubble = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        { color: "#292F56", enabled: true },
        { color: "#1E4572", enabled: true },
        { color: "#005C8B", enabled: true },
        { color: "#007498", enabled: true },
        { color: "#008BA0", enabled: true },
      ],
      speed: 4,
      horizontalPressure: 4,
      verticalPressure: 5,
      waveFrequencyX: 2,
      waveFrequencyY: 3,
      waveAmplitude: 5,
      shadows: 0,
      highlights: 2,
      colorBrightness: 1,
      colorSaturation: 7,
      wireframe: false,
      colorBlending: 6,
      backgroundColor: "#003FFF",
      backgroundAlpha: 1,
      resolution: 1,
    });

    return () => {
      if (gradientRef.current) {
        gradientRef.current.destroy();
      }
    };
  }, []);

  return (
    <canvas
      style={{
        isolation: "isolate",
        height: "100%",
        width: "100%",
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
      ref={canvasRef}
    />
  );
};

export default Bubble;
