import React from "react";

export const HangmanSvg = ({ failCount }) => {
  return (
    <svg width="50%" height="50%" viewBox="0 0 250 450">
      {/* board base */}
      <line
        stroke="brown"
        x1="0"
        x2="100"
        y1="400"
        y2="400"
        strokeWidth="3"
        fillOpacity="0"
      />
      {/* board body vertical */}
      <line
        x1="50"
        x2="50"
        y1="50"
        y2="400"
        stroke="brown"
        strokeWidth="3"
        fillOpacity="0"
      />

      {/* board body horizontal */}
      <line
        x1="50"
        x2="200"
        y1="50"
        y2="50"
        stroke="brown"
        strokeWidth="3"
        fillOpacity="0"
      />

      {/* board body horizontal */}
      <line
        x1="200"
        x2="200"
        y1="50"
        y2="110"
        stroke="brown"
        strokeWidth="3"
        fillOpacity="0"
      />

      {/* head */}
      {failCount > 0 && (
        <circle
          cx="200"
          cy="150"
          r="40"
          stroke="black"
          strokeWidth="3"
          fillOpacity="0"
        />
      )}

      {/* neck */}
      {failCount > 1 && (
        <line
          x1="200"
          x2="200"
          y1="190"
          y2="220"
          stroke="black"
          strokeWidth="3"
          fillOpacity="0"
        />
      )}

      {/* right arm */}
      {failCount > 2 && (
        <line
          x1="200"
          x2="250"
          y1="220"
          y2="250"
          stroke="black"
          strokeWidth="3"
          fillOpacity="0"
        />
      )}

      {/* left arm */}
      {failCount > 3 && (
        <line
          x1="150"
          x2="200"
          y1="250"
          y2="220"
          stroke="black"
          strokeWidth="3"
          fillOpacity="0"
        />
      )}

      {/* body */}
      {failCount > 4 && (
        <line
          x1="200"
          x2="200"
          y1="220"
          y2="300"
          stroke="black"
          strokeWidth="3"
          fillOpacity="0"
        />
      )}

      {/* right leg */}
      {failCount > 5 && (
        <line
          x1="200"
          x2="150"
          y1="300"
          y2="330"
          stroke="black"
          strokeWidth="3"
          fillOpacity="0"
        />
      )}

      {/* left leg */}
      {failCount > 6 && (
        <line
          x1="250"
          x2="200"
          y1="330"
          y2="300"
          stroke="black"
          strokeWidth="3"
          fillOpacity="0"
        />
      )}
    </svg>
  );
};
