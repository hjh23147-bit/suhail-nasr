"use client";

import { useEffect, useRef } from "react";

export function FlowingCalligraphyStream() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Subtle continuous stroke dash offset animation
    let offset = 0;
    let animationFrameId: number;

    const animate = () => {
      offset = (offset + 0.35) % 2000;
      if (pathRef.current) {
        pathRef.current.style.strokeDashoffset = `${-offset}px`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30 select-none"
    >
      <svg
        viewBox="0 0 1440 2400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="goldInkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B79A5B" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#D0BB88" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#0B0B0A" stopOpacity="0.15" />
            <stop offset="75%" stopColor="#B79A5B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B2B20" stopOpacity="0.2" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Primary Flowing Calligraphy Ribbon */}
        <path
          ref={pathRef}
          d="M -100 200 C 300 150, 450 650, 800 450 C 1150 250, 1300 850, 950 1100 C 600 1350, 200 1200, 400 1600 C 600 2000, 1200 1800, 1500 2200"
          stroke="url(#goldInkGradient)"
          strokeWidth="2.5"
          strokeDasharray="40 18 120 25 80 40"
          strokeLinecap="round"
          filter="url(#softGlow)"
        />

        {/* Secondary Delicate Echo Stroke */}
        <path
          d="M -50 280 C 350 210, 500 710, 850 510 C 1200 310, 1350 910, 1000 1160 C 650 1410, 250 1260, 450 1660 C 650 2060, 1250 1860, 1550 2260"
          stroke="#B79A5B"
          strokeWidth="0.8"
          strokeDasharray="15 35"
          strokeOpacity="0.35"
        />

        {/* Floating Calligraphy Nuance Dots (Points of Qalam) */}
        <circle cx="380" cy="520" r="3" fill="#B79A5B" opacity="0.6" />
        <circle cx="820" cy="460" r="4" fill="#B79A5B" opacity="0.5" />
        <circle cx="980" cy="1120" r="3.5" fill="#B79A5B" opacity="0.6" />
        <circle cx="420" cy="1620" r="4" fill="#B79A5B" opacity="0.5" />
      </svg>
    </div>
  );
}
