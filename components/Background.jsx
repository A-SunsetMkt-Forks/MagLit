import React from "react";

const Background = ({ ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 450"
      {...rest}
    >
      <defs>
        <filter
          id="bbblurry-filter"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feGaussianBlur
            stdDeviation="130"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            edgeMode="none"
            result="blur"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <ellipse
          rx="219.5"
          ry="215"
          cx="614.6378451260654"
          cy="228.07355707341975"
          fill="hsl(37, 99%, 67%)"
        ></ellipse>
        <ellipse
          rx="219.5"
          ry="215"
          cx="183.14674932306463"
          cy="352.1817377263849"
          fill="hsl(316, 73%, 52%)"
        ></ellipse>
        <ellipse
          rx="219.5"
          ry="215"
          cx="196.29381491921163"
          cy="48.65340354225853"
          fill="hsl(185, 100%, 57%)"
        ></ellipse>
      </g>
    </svg>
  );
};

export default Background;
